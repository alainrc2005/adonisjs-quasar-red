'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Hash = use('Hash')
const Database = use('Database')

class UserSeeder {
  async run () {
    await Database.insert([
      {
        id: 1, username: 'Administrador del Sistema', email: 'admin@example.com',
        password: await Hash.make('admin123')
      }
    ]).into('users')
    await Database.raw('insert into users_grants select null,1,1,code from grants')
  }
}

module.exports = UserSeeder
