'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RolesGrantsSchema extends Schema {
  up () {
    this.create('roles_grants', (table) => {
      table.increments()
      table.integer('rol_id',10).notNullable().unsigned().index()
      table.integer('grant_id',10).notNullable().unsigned().index()
      table.foreign('rol_id').references('roles.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.foreign('grant_id').references('grants.id').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('roles_grants')
  }
}

module.exports = RolesGrantsSchema
