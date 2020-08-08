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

    async getEntity({ request }){
        let result = { code: 'Ok' };
        try {
            result.entity = await Database.from('entities').where('id',request.input('id'))
            .select('id', 'name', 'address', 'workstations', 'users',
            'link_type', 'link_speed', 'rlan', 'rlan_permissions',
            'vpn', 'vpn_permissions', 'plc', 'plc_permissions',
            'voip', 'voip_permissions', 'link_provider', 'resource_type',
            'province', 'municipality', 'email_domain', 'email_server', 'proxy_server',
            'phone_anchor', 'cac', 'entity_date').first();
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async store({ request, auth }){
        let result = { code: 'Ok' };
        try {
            await br.commonCreate(Entity, request, 'D022', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async update({ request, auth }){
        let result = { code: 'Ok' };
        try {
            await br.commonUpdate(Entity, request, 'D023', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async destroy({ request, auth }){
        let result = { code: 'Ok' };
        try {
            await br.commonDestroy(Entity, request, 'D024', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = EntityController
