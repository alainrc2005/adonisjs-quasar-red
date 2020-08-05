'use strict'
const dt = make('App/Libraries/Datatable')
const Database = use('Database')
const br = make('App/Libraries/BaseRepo')
const Entity = use('App/Models/Entity')

class EntityController {
    async fetch({ request }){
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'name' },
            { db: 'province' },
            { db: 'province_text' },
            { db: 'municipality' },
            { db: 'municipality_text' }
        ];
        try {
            let filters = request.input('filters');
            let where = [];
            if (filters.entity) where.push(`name like '%${filters.entity}%'`);
            if (filters.province) where.push(`province = ${filters.province}`);
            if (filters.municipality) where.push(`municipality = ${filters.municipality}`);
            if (filters.speed) where.push(`link_speed = ${filters.speed}`);
            result.dt = await dt.execute(request.all(), 'v_entities', 'id', $columns, where);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getForSelect() {
        let result = { code: 'Ok' };
        try {
            result.provinces = await Database.from('provinces').select('id','description');
            result.municipalities = await Database.from('municipalities').select('id', 'province', 'description');
            result.speeds = await Database.from('speeds').select('id', 'description');
            result.resources = await Database.from('resources').select('id', 'description');
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = EntityController
