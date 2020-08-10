'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResourcesSchema extends Schema {
  up () {
    this.create('resources', (table) => {
      table.increments()
      table.string('description').notNullable()
      table.integer('created_user',10).notNullable().unsigned()
      table.integer('updated_user',10).notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('resources')
  }
}

module.exports = ResourcesSchema
