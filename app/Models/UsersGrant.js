'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UsersGrant extends Model {
    static get table () {
        return 'users_grants'
      }
}

module.exports = UsersGrant
