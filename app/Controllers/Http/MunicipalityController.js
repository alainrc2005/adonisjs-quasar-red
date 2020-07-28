'use strict'
const dt = make('App/Libraries/Datatable')
const Database = use('Database')

class MunicipalityController {
    async fetch({ request }){
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'province', search: true },
            { db: 'description', search: true },
            { db: 'updated_at' }
        ];
        try {
            let where = [`province = ${request.input('province')}`];
            result.dt = await dt.complex(request.all(), 'municipalities', 'id', $columns, where);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getForSelect(){
        let result = {code: 'Ok'};
        try{
            result.provinces = await Database.from('provinces').select('id','description');
        }catch(e){
            result.code = e.message;
        }
        return result;
    }
}

module.exports = MunicipalityController
