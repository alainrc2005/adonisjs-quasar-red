'use strict'

/*
|--------------------------------------------------------------------------
| SpeedSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class SpeedSeeder {
  async run () {
    await Database.truncate('speeds')
    await Database.insert([
      {id: 1, description: 'Conmutado'},
      {id: 2, description: '64 Kbps'},
      {id: 3, description: '128 Kbps'},
      {id: 4, description: '256 Kbps'},
      {id: 5, description: '512 Kbps'},
    ]).into('speeds')
  }
}

module.exports = SpeedSeeder
