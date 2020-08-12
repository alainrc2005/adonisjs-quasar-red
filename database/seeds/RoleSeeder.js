'use strict'

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class RoleSeeder {
  async run () {
    await Database.insert({
      id: 1, name: 'Administradores'
    }).into('roles')
    await Database.raw('insert into roles_grants select null,1,code from grants')
  }
}

module.exports = RoleSeeder
