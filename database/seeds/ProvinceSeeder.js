'use strict'

/*
|--------------------------------------------------------------------------
| ProvinceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ProvinceSeeder {
  async run () {
    //await Database.truncate('provinces')
    await Database.insert([
      {id:1, abbr: 'PDR', description: 'Pinar del Río'},
      {id:2, abbr: 'MAY', description: 'Mayabeque'},
      {id:3, abbr: 'HAB', description: 'La Habana'},
      {id:4, abbr: 'MTZ', description: 'Matanzas'},
      {id:5, abbr: 'CFG', description: 'Cienfuegos'},
      {id:6, abbr: 'VCL', description: 'Villa Clara'},
      {id:7, abbr: 'SSP', description: 'Sancti Spíritus'},
      {id:8, abbr: 'CAV', description: 'Ciego de Ávila'},
      {id:9, abbr: 'CMG', description: 'Camagüey'},
      {id:10, abbr: 'LTU', description: 'Las Tunas'},
      {id:11, abbr: 'HLG', description: 'Holguín'},
      {id:12, abbr: 'GRM', description: 'Granma'},
      {id:13, abbr: 'STG', description: 'Santiago de Cuba'},
      {id:14, abbr: 'GTM', description: 'Guantánamo'},
      {id:15, abbr: 'ISL', description: 'Isla de la Juventud'},
      {id:17, abbr: 'ART', description: 'Artemisa'},
    ]).into('provinces')
  }
}

module.exports = ProvinceSeeder
