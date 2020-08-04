'use strict'
const dt = make('App/Libraries/Datatable')
const br = make('App/Libraries/BaseRepo')
const Speed = use('App/Models/Speed')

class SpeedController {
    async fetch({ request }){
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'description', search: true },
            { db: 'updated_at' }
        ];
        try {
            result.dt = await dt.execute(request.all(), 'speeds', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async store({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonCreate(Speed, request, 'D010', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async update({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonUpdate(Speed, request, 'D011', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async destroy({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonDestroy(Speed, request, 'D012', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = SpeedController
