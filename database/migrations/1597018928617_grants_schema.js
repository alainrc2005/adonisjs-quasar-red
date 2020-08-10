'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GrantsSchema extends Schema {
  up () {
    this.create('grants', (table) => {
      table.increments()
      table.integer('code',10).notNullable().unsigned().index()
      table.string('grant').notNullable()
    })
  }

  down () {
    this.drop('grants')
  }
}

module.exports = GrantsSchema
