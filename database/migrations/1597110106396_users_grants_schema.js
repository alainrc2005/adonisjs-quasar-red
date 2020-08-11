'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersGrantsSchema extends Schema {
  up () {
    this.create('users_grants', (table) => {
      table.increments()
      table.integer('user_id',10).notNullable().unsigned().index()
      table.integer('rol_id',10).notNullable().unsigned().index()
      table.integer('grant_id',10).notNullable().unsigned().index()
      table.foreign('user_id').references('users.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.foreign('rol_id').references('roles.id').onDelete('CASCADE').onUpdate('CASCADE')
      table.foreign('grant_id').references('grants.id').onDelete('CASCADE').onUpdate('CASCADE')
    })
  }

  down () {
    this.drop('users_grants')
  }
}

module.exports = UsersGrantsSchema
