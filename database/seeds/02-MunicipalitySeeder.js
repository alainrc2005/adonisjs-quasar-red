'use strict'

/*
|--------------------------------------------------------------------------
| MunicipalitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class MunicipalitySeeder {
  async run () {
    await Database.truncate('municipalities')
    await Database.insert([
      {id: 1, province: 1, description: 'Sandino'},
      {id: 2, province: 1, description: 'San Luis'},
      {id: 3, province: 1, description: 'Mantua'},
    ]).into('municipalities')
  }
}

module.exports = MunicipalitySeeder
