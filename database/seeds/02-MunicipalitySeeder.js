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
      {id: 16, province: 2, description: 'Güines'},
      {id: 17, province: 2, description: 'Melena del Sur'},
      {id: 18, province: 2, description: 'Batabanó'},
      {id: 19, province: 2, description: 'Quivicán'},
      {id: 20, province: 17, description: 'Guira de Melena'},
      {id: 21, province: 17, description: 'Artemisa'},
      {id: 22, province: 2, description: 'Nueva Paz'},
      {id: 23, province: 2, description: 'Bejucal'},
      {id: 24, province: 17, description: 'Alquizar'},
      {id: 25, province: 17, description: 'Caimito'},
      {id: 26, province: 2, description: 'Jaruco'},
      {id: 27, province: 17, description: 'Guanajay'},
      {id: 28, province: 2, description: 'Madruga'},
      {id: 29, province: 17, description: 'Bauta'},
      {id: 30, province: 17, description: 'San Antonio de los Baños'},
      {id: 31, province: 2, description: 'San José de las Lajas'},
      {id: 32, province: 2, description: 'Santa Cruz del Norte'},
      {id: 33, province: 17, description: 'Mariel'},
      {id: 34, province: 3, description: 'Diez de Octubre'},
    ]).into('municipalities')
  }
}

module.exports = MunicipalitySeeder
