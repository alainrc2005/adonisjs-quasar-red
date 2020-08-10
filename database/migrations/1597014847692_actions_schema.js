'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActionsSchema extends Schema {
  up () {
    this.create('actions', (table) => {
      table.increments()
      table.integer('user_id',10).notNullable().unsigned()
      table.string('action').notNullable()
      table.string('machine')
      table.datetime('datetime').notNullable(),
      table.specificType('description','longblob')
    })
  }

  down () {
    this.drop('actions')
  }
}

module.exports = ActionsSchema
