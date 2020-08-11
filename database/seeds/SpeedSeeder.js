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
      {id: 6, description: '1 Mbps'},
      {id: 7, description: '2 Mbps'},
      {id: 8, description: '3 Mbps'},
      {id: 9, description: '4 Mbps'},
      {id: 10, description: '5 Mbps'},
      {id: 11, description: '6 Mbps'},
      {id: 12, description: '7 Mbps'},
      {id: 13, description: '8 Mbps'},
      {id: 14, description: '9 Mbps'},
      {id: 15, description: '10 Mbps'},
      {id: 16, description: '100 Mbps'},
      {id: 19, description: '20 Mbps'},
      {id: 20, description: '50 Mbps'},
    ]).into('speeds')
  }
}

module.exports = SpeedSeeder
