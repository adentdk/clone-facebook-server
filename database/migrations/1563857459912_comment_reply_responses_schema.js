'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentReplyResponsesSchema extends Schema {
  up () {
    this.create('comment_reply_responses', (table) => {
      table.increments()
      table.integer('comment_id').unsigned().references('id').inTable('comments')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('response_id').unsigned().references('id').inTable('responses')
      table.timestamps()
    })
  }

  down () {
    this.drop('comment_reply_responses')
  }
}

module.exports = CommentReplyResponsesSchema
