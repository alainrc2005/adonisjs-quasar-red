'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HelpsSchema extends Schema {
  up () {
    this.create('helps', (table) => {
      table.increments()
      table.integer('consecutive',10).notNullable().unsigned()
      table.string('topic').notNullable()
      table.string('subtopic').notNullable()
      table.string('path').index()
      table.specificType('content','longtext')
      table.integer('created_user',10).notNullable().unsigned()
      table.integer('updated_user',10).notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('helps')
  }
}

module.exports = HelpsSchema
