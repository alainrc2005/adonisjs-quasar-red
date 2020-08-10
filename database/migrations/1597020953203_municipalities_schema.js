'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MunicipalitiesSchema extends Schema {
  up () {
    this.create('municipalities', (table) => {
      table.increments()
      table.integer('province',10).notNullable().unsigned()
      table.string('description').notNullable()
      table.integer('created_user',10).notNullable().unsigned()
      table.integer('updated_user',10).notNullable().unsigned()
      table.timestamps()
      table.foreign('province').references('provinces.id').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('municipalities')
  }
}

module.exports = MunicipalitiesSchema
