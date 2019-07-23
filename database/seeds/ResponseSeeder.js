'use strict'

/*
|--------------------------------------------------------------------------
| ResponseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class ResponseSeeder {
  async run () {
  	Factory.model('App/Models/Response').createMany(6)
  }
}

module.exports = ResponseSeeder
