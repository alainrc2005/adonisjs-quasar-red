'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class MwVisitsSchema extends Schema {
  up () {
    this.create('mw_visits', (table) => {
      table.increments()
      table.string('ipaddr').notNullable()
      table.date('date').notNullable()
    })
  }

  down () {
    this.drop('mw_visits')
  }
}

module.exports = MwVisitsSchema
