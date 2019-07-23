'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder {
    async run() {
        const user = await Factory.model('App/Models/User').create()
        const feed = await Factory.model('App/Models/Feed').make()
        const story = await Factory.model('App/Models/Story').make()

        await user.feeds().save(feed)
        await user.stories().save(story)
    }
}

module.exports = UserSeeder