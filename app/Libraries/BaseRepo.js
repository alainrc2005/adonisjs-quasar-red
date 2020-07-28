'use strict';

const moment = require('moment')
const Database = use('Database')

class BaseRepo {

    async commonCreate(model, request, action, user_id) {
        await Database.transaction(async (trx) => {
            let row = request.all();
            row.created_user = row.updated_user = user_id;
            row.created_at = row.updated_at = moment().format('YYYY-MM-DD HH:mm:ss');
            let record = await model.create(row, trx);
            await trx.insert(this.getActionData(action, user_id, request.ip(), record.id)).into('actions');
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
}

module.exports = BaseRepo;