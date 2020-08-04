'use strict';

const moment = require('moment')
const Database = use('Database')

class BaseRepo {

    async commonCreate(model, request, action, user_id, afterCreate, beforeCreate) {
        return await Database.transaction(async (trx) => {
            let row = request.all();
            row.created_user = row.updated_user = user_id;
            row.created_at = row.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
            if (typeof (beforeCreate) === 'function') beforeCreate(row, trx);
            let record = await model.create(row, trx);
            if (typeof (afterCreate) === 'function') afterCreate(record, trx);
            await trx.insert(this.getActionData(action, user_id, request.ip(), record.id)).into('actions');
            return record;
        })
    }

    async commonUpdate(model, request, action, user_id, afterUpdate, beforeUpdate) {
        await Database.transaction(async (trx) => {
            let row = request.all();
            row.updated_user = user_id;
            row.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
            let record = await model.findOrFail(row.id);
            if (typeof (beforeUpdate) === 'function') beforeUpdate(record, trx);
            await model.query().where('id', record.id).update(row);
            if (typeof (afterUpdate) === 'function') afterUpdate(row, trx);
            await trx.insert(this.getActionData(action, user_id, request.ip(), JSON.stringify(record))).into('actions');
        })
    }

    async commonDestroy(model, id, action, user_id, afterDestroy, beforeDestroy) {
        return await Database.transaction(async (trx) => {
            let record = await model.findOrFail(row.id);
            if (typeof (beforeDestroy) === 'function') beforeDestroy(record, trx);
            await model.query().where('id', id).delete();
            if (typeof (afterDestroy) === 'function') afterDestroy(record, trx);
            await trx.insert(this.getActionData(action, user_id, request.ip(), JSON.stringify(record))).into('actions');
            return record;
        })
    }

    getActionData(action, user_id, machine = null, description = null) {
        return {
            user_id,
            action,
            machine,
            datetime: moment().format('YYYY-MM-DD HH:mm:ss'),
            description
        }
    }

    async createAction(request, action, user_id, description = null) {
        await Database.table('actions').insert(this.getActionData(action, user_id, request.ip(), description));
    }
}

module.exports = BaseRepo;