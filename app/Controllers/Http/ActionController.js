'use strict'

const dt = make('App/Libraries/Datatable')
const Database = use('Database')
const moment = require('moment')

class ActionController {

    async countByUnit(unit){
        let now = moment();
        return (await Database.table('actions').where('datetime','>=',now.startOf(unit).format('YYYY-MM-DD HH:mm'))
                .where('datetime','<=',now.endOf(unit).format('YYYY-MM-DD HH:mm')).getCount())
    }

    async getData() {
        let result = { code: 'Ok' }
        try {
            result.users = await Database.table('users').select('id', 'username');
            result.actions_codes = await Database.table('actions_codes').select('value', 'description');
            let now = moment();
            result.stats = {
                day: await this.countByUnit('day'),
                week: await this.countByUnit('week'),
                month: await this.countByUnit('month'),
                year: await this.countByUnit('year')
            }
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async fetch({ request }) {
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'user' },
            { db: 'action' },
            { db: 'datetime' },
            { db: 'machine' }
        ];
        try {
            let where = [];
            let filters = request.input('filters')
            if (filters.user) where.push('user_f = '+filters.user);
            if (filters.action) where.push(`action_f = '${filters.action.value}'`);
            if (filters.startdate) {
                let m = moment(filters.startdate,'DD/MM/YYYY');
                where.push(`datetime >= '${m.startOf('day').format('YYYY-MM-DD HH:mm')}'`);
            }
            if (filters.enddate) {
                let m = moment(filters.enddate,'DD/MM/YYYY');
                where.push(`datetime <= '${m.endOf('day').format('YYYY-MM-DD HH:mm')}'`);
            }
            if (filters.machine) where.push(`machine like '%${filters.machine}%'`);
            result.dt = await dt.complex(request.all(), 'v_actions', 'id', $columns, where)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getDetails({ request }) {
        let result = {code: 'Ok'}
        try{
            result.details = Buffer.from((await Database.table('actions').where('id',request.input('id')).select('description').first()).description,'binary').toString();
        }catch(e){
            result.code = e.message;
        }
        return result;
    }
}

module.exports = ActionController
