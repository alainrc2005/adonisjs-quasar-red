'use strict'

/*
|--------------------------------------------------------------------------
| ActionsCodeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

class ActionsCodeSeeder {
  async run () {
    await Database.truncate('actions_codes')
    await Database.insert([
      {value: 'D001', description: 'Entrar al Sistema'},
      {value: 'D002', description: 'Salir del Sistema'},
      {value: 'D003', description: 'Crear Usuario'},
      {value: 'D004', description: 'Actualizar Usuario'},
      {value: 'D005', description: 'Eliminar Usuario'},
      {value: 'D006', description: 'Crear Rol del Sistema'},
      {value: 'D007', description: 'Actualizar Rol del Sistema'},
      {value: 'D008', description: 'Eliminar Rol del Sistema'},
      {value: 'D030', description: 'Crear Tópico de Ayuda'},
      {value: 'D031', description: 'Actualizar Tópico de Ayuda'},
      {value: 'D032', description: 'Eliminar Tópico de Ayuda'},
      {value: 'D010', description: 'Crear Velocidad'},
      {value: 'D011', description: 'Actualizar Velocidad'},
      {value: 'D012', description: 'Eliminar Velocidad'},
      {value: 'D013', description: 'Crear Recurso'},
      {value: 'D014', description: 'Actualizar Recurso'},
      {value: 'D015', description: 'Eliminar Recurso'},
      {value: 'D016', description: 'Crear Provincia'},
      {value: 'D017', description: 'Actualizar Provincia'},
      {value: 'D018', description: 'Eliminar Provincia'},
      {value: 'D019', description: 'Crear Municipio'},
      {value: 'D020', description: 'Actualizar Municipio'},
      {value: 'D021', description: 'Eliminar Municipio'},
      {value: 'D022', description: 'Crear Entidad'},
      {value: 'D023', description: 'Actualizar Entidad'},
      {value: 'D024', description: 'Eliminar Entidad'},
      {value: 'D025', description: 'Activar/Desactivar Usuario'},
    ]).into('actions_codes')
  }
}

module.exports = ActionsCodeSeeder
