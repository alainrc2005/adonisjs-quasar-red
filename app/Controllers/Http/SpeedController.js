'use strict'
const dt = make('App/Libraries/Datatable')

class SpeedController {
    async fetch({ request }){
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'description', search: true },
            { db: 'updated_at' }
        ];
        try {
            result.dt = await dt.complex(request.all(), 'speeds', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = SpeedController
