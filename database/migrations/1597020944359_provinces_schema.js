'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProvincesSchema extends Schema {
  up () {
    this.create('provinces', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.string('abbr',3).notNullable()
      table.integer('created_user',10).notNullable().unsigned()
      table.integer('updated_user',10).notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('provinces')
  }
}

module.exports = ProvincesSchema
