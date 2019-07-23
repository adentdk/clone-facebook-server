'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** .type {typeof import('.adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
	Route.get('/',() => {
		return {'message' : 'welcome to facebookFake API','data' : {}
		}
	})
	Route.post('/users','UserController.store')
	Route.post('/auth/signin','AuthController.signin')
}).prefix('api/v1')

Route.group(() => {

	Route.get('/feeds','FeedController.index')
	Route.post('/feeds','FeedController.store')
	Route.patch('feeds/:id','FeedController.update')
	Route.delete('/feeds/:id','FeedController.index')
	
	Route.get('/responses','ResponseController.index')
	Route.post('/responses','ResponseController.store')
	Route.patch('responses/:id','ResponseController.update')
	Route.delete('/responses/:id','ResponseController.index')

	Route.get('/comments','CommentController.index')
	Route.post('/comments','CommentController.store')
	Route.patch('comments/:id','CommentController.update')
	Route.delete('/comments/:id','CommentController.index')

	Route.get('/stories','StoryController.index')
	Route.post('/stories','StoryController.store')
	Route.delete('/stories','StoryController.index')

}).prefix('api/v1').middleware('auth')