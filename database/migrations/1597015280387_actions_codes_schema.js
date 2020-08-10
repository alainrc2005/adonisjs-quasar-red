'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ActionsCodesSchema extends Schema {
  up () {
    this.create('actions_codes', (table) => {
      table.increments()
      table.string('value').notNullable().unique()
      table.string('description').notNullable()
    })
  }

  down () {
    this.drop('actions_codes')
  }
}

module.exports = ActionsCodesSchema
