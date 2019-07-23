'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommentRepliesSchema extends Schema {
  up () {
    this.create('comment_replies', (table) => {
      table.increments()
      table.integer('comment_id').unsigned().references('id').inTable('comments')
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.text('content')
      table.timestamps()
    })
  }

  down () {
    this.drop('comment_replies')
  }
}

module.exports = CommentRepliesSchema
