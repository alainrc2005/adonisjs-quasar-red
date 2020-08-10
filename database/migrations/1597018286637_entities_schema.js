'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EntitiesSchema extends Schema {
  up () {
    this.create('entities', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.text('address').notNullable()
      table.integer('workstations').notNullable().unsigned()
      table.integer('users').notNullable().unsigned()
      table.integer('link_type').notNullable().unsigned()
      table.integer('link_speed').notNullable().unsigned().index()
      table.specificType('rlan','char(1)').notNullable().defaultTo('0')
      table.text('rlan_permissions')
      table.specificType('vpn','char(1)').notNullable().defaultTo('0')
      table.text('vpn_permissions')
      table.specificType('plc','char(1)').notNullable().defaultTo('0')
      table.text('plc_permissions')
      table.specificType('voip','char(1)').notNullable().defaultTo('0')
      table.text('voip_permissions')
      table.integer('link_provider').notNullable().unsigned()
      table.integer('resource_type').notNullable().unsigned().index()
      table.integer('province').notNullable().unsigned().index()
      table.integer('municipality').notNullable().unsigned().index()
      table.string('email_domain')
      table.string('email_server')
      table.string('proxy_server')
      table.string('phone_anchor')
      table.string('cac')
      table.string('entity_date')
      table.integer('created_user',10).notNullable().unsigned()
      table.integer('updated_user',10).notNullable().unsigned()
      table.timestamps()
    })
  }

  down () {
    this.drop('entities')
  }
}

module.exports = EntitiesSchema
