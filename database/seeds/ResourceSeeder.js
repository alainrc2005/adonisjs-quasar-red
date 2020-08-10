'use strict'

/*
|--------------------------------------------------------------------------
| ResourceSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ResourceSeeder {
  async run () {
    await Database.truncate('resources')
    await Database.insert([
      {id: 1, description: 'Recurso Propio'},
      {id: 2, description: 'Proveedor Público'},
    ]).into('resources')
  }
}

module.exports = ResourceSeeder
