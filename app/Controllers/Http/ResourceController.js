'use strict'
const dt = make('App/Libraries/Datatable')
const br = make('App/Libraries/BaseRepo')
const Resource = use('App/Models/Resource')

class ResourceController {
    async fetch({ request }) {
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'description', search: true },
            { db: 'updated_at' }
        ];
        try {
            result.dt = await dt.execute(request.all(), 'resources', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async store({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonCreate(Resource, request, 'D013', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async update({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonUpdate(Resource, request, 'D014', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async destroy({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonDestroy(Resource, request, 'D015', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = ResourceController
