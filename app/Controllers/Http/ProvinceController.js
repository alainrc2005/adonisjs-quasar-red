'use strict'
const dt = make('App/Libraries/Datatable')
const br = make('App/Libraries/BaseRepo')
const Province = use('App/Models/Province')

class ProvinceController {
    async fetch({ request }){
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'description', search: true },
            { db: 'updated_at' }
        ];
        try {
            result.dt = await dt.execute(request.all(), 'provinces', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async store({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonCreate(Province, request, 'D016', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async update({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonUpdate(Province, request, 'D017', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async destroy({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonDestroy(Province, request, 'D018', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = ProvinceController
