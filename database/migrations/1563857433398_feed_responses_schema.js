'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FeedResponsesSchema extends Schema {
  up () {
    this.create('feed_responses', (table) => {
      table.increments()
      table.integer('feed_id').unsigned().references('id').inTable('feeds')
      table.integer('user_id').unsigned().references('id').inTable('users')
	  table.integer('response_id').unsigned().references('id').inTable('responses')
      table.timestamps()
    })
  }

  down () {
    this.drop('feed_responses')
  }
}

module.exports = FeedResponsesSchema
