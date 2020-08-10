'use strict'

/*
|--------------------------------------------------------------------------
| GrantSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class GrantSeeder {
  async run () {
    await Database.truncate('grants')
    await Database.insert([
      {id: 100, code: 100, grant: 'Visualizar Entidades'},
      {id: 101, code: 101, grant: 'Gestionar Entidades'},
      {id: 200, code: 200, grant: 'Visualizar Velocidades'},
      {id: 201, code: 201, grant: 'Gestionar Velocidades'},
      {id: 300, code: 300, grant: 'Visualizar Recursos'},
      {id: 301, code: 301, grant: 'Gestionar Recursos'},
      {id: 400, code: 400, grant: 'Visualizar Provincias'},
      {id: 401, code: 401, grant: 'Gestionar Provincias'},
      {id: 500, code: 500, grant: 'Visualizar Municipios'},
      {id: 501, code: 501, grant: 'Gestionar Municipios'},
      {id: 600, code: 600, grant: 'Visualizar Administración'},
      {id: 601, code: 601, grant: 'Visualizar Usuarios'},
      {id: 602, code: 602, grant: 'Gestionar Usuarios'},
      {id: 603, code: 603, grant: 'Gestionar Email en Perfil de Usuario'},
      {id: 604, code: 604, grant: 'Visualizar Roles'},
      {id: 605, code: 605, grant: 'Gestionar Roles'},
      {id: 606, code: 606, grant: 'Visualizar Acciones'},
      {id: 700, code: 700, grant: 'Gestionar Ayuda'},
    ]).into('grants')
  }
}

module.exports = GrantSeeder
