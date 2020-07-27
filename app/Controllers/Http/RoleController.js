'use strict'
const Database = use('Database')
const dt = make('App/Libraries/Datatable')

class RoleController {
    async fetch({ request }) {
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id', dt: 'id' },
            { db: 'name', dt: 'name', search: true },
            { db: 'created_at', dt: 'created_at' }
        ];
        try {
            result.dt = await dt.complex(request.all(), 'roles', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getGrants() {
        let result = { code: 'Ok' };
        try {
            result.grants = await Database.from('grants').orderBy('code').select('id', 'grant');
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getRolGrants({ request }){
        let result = { code: 'Ok' };
        try {
            let grants = await Database.from('roles_grants').where('rol_id', request.input('rol')).select('grant_id');
            result.grants = grants.map(el=>{
                return el.grant_id;
            });
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = RoleController
