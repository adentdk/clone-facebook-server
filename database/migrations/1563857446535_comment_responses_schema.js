'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentResponsesSchema extends Schema {
  up () {
    this.create('comment_responses', (table) => {
      table.increments()
      table.integer('comment_id').unsigned().references('id').inTable('comments')
      table.integer('response_id').unsigned().references('id').inTable('responses')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.timestamps()
    })
  }

  down () {
    this.drop('comment_responses')
  }
}

module.exports = CommentResponsesSchema
