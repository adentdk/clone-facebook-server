'use strict'

const User = use('App/Models/User')

class AuthController {

	async signin({request,response,auth}) {
		const {email, password} = request.only(['email', 'password'])
        try {
                await auth.attempt(email,password)
                
                const user = await User.findBy('email',email)
                let token = await auth.generate(user)

                response.send({
                    "user" : user,
                    "accessToken" : token
                })
            
        } catch (error) {
            console.log(error)
            response.status(400).send({
                "message" : "something went wrong"
            })
        }
    }
}

module.exports = AuthController
