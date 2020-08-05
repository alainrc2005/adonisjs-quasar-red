'use strict'
const dt = make('App/Libraries/Datatable')
const Database = use('Database')
const br = make('App/Libraries/BaseRepo')
const Municipality = use('App/Models/Municipality')

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
            result.dt = await dt.execute(request.all(), 'municipalities', 'id', $columns, where);
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

    async store({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonCreate(Municipality, request, 'D019', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async update({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonUpdate(Municipality, request, 'D020', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async destroy({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            await br.commonDestroy(Municipality, request, 'D021', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = MunicipalityController
