'use strict'

const Entities = use('App/Models/Entity')
const Provinces = use('App/Models/Province')
const Municipalities = use('App/Models/Municipality')
const Resources = use('App/Models/Resource')
const Speeds = use('App/Models/Speed')
const Users = use('App/Models/User')
const Actions = use('App/Models/Action')
const Roles = use('App/Models/Role')
const moment = require('moment')
const _ = require('lodash')
const Database = use('Database')


class MainController {
    async index({ request, view, session }) {
        if (session.get('mw_visit')===null){
            await Database.insert({
                ipaddr: request.ip(),
                date: moment().format('YYYY-MM-DD')
            }).into('mw_visits');
            session.put('mw_visit', true);
        }
        return view.render('app')
    }

    async getMainDashboard() {
        let result = { code: 'Ok' };
        try {
            result.stats = {
                entities: await Entities.getCount(),
                provinces: await Provinces.getCount(),
                municipalities: await Municipalities.getCount(),
                resources: await Resources.getCount(),
                speeds: await Speeds.getCount()
            }
            result.gbp = await Database.raw('select count(*) y,(select abbr from provinces where id=e.province) name from entities e GROUP BY province');
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getAdminDashboard() {
        let result = { code: 'Ok' };
        try {
            result.stats = {
                users: await Users.getCount(),
                actions: await Actions.getCount(),
                roles: await Roles.getCount(),
            }
            let now = moment();
            let old = now.clone().subtract(25, 'days');
            let cnt = await Database.table('actions').select(Database.raw('count(*) cnt,DATE(datetime) date'))
                .where('datetime', '>=', old.startOf('day').format('YYYY-MM-DD HH:mm')).groupBy('date');
            result.dates = [];
            result.counts = [];
            for (let date = old; date.isSameOrBefore(now); date.add(1, 'day')) {
                result.dates.push(date.format('DD-MM'));
                let d = _.find(cnt, it => {
                    return date.format('YYYY-MM-DD') === moment(it.date).format('YYYY-MM-DD');
                })
                result.counts.push(d === void 0 ? 0 : d.cnt);
            }
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = MainController
