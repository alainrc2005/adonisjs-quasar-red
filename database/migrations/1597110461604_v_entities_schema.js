'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')

class VEntitiesSchema extends Schema {
  async up () {
    await Database.raw('DROP VIEW IF EXISTS `v_entities`')
    await Database.raw('create view v_entities as select id,name,(select description from provinces where id=province) province_text, province,(select description from municipalities where id=municipality) municipality_text, municipality, link_speed from entities')
  }

  async down () {
    await Database.raw('DROP VIEW IF EXISTS `v_entities`')
  }
}

module.exports = VEntitiesSchema
