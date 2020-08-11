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
      {id: 4, province: 1, description: 'San Juan y Martínez'},
      {id: 5, province: 1, description: 'Pinar del Río'},
      {id: 6, province: 1, description: 'Consolación del Sur'},
      {id: 7, province: 1, description: 'Los Palacios'},
      {id: 8, province: 1, description: 'Minas de Matahambre'},
      {id: 9, province: 17, description: 'Candelaria'},
      {id: 10, province: 17, description: 'Bahía Honda'},
      {id: 11, province: 1, description: 'Viñales'},
      {id: 12, province: 1, description: 'La Palma'},
      {id: 13, province: 17, description: 'San Cristóbal'},
      {id: 14, province: 1, description: 'Guanes'},
      {id: 15, province: 2, description: 'San Nicolás de Bari'},
    ]).into('municipalities')
  }
}

module.exports = MunicipalitySeeder
