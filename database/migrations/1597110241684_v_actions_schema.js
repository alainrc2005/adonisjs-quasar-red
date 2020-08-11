'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')
const Database = use('Database')

class VActionsSchema extends Schema {
  async up () {
    await Database.raw('DROP VIEW IF EXISTS `v_actions`')
    await Database.raw('create view v_actions as select `a`.`id` AS `id`,`ac`.`description` AS `action`,`a`.`action` AS `action_f`,(select `users`.`username` from `users` where `users`.`id` = `a`.`user_id`) AS `user`,`a`.`user_id` AS `user_f`,`a`.`datetime` AS `datetime`,`a`.`machine` AS `machine` from (`actions` `a` join `actions_codes` `ac`) where `a`.`action` = `ac`.`value`')
  }

  async down () {
    await Database.raw('DROP VIEW IF EXISTS `v_actions`')
  }
}

module.exports = VActionsSchema
