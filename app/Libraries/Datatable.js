'use strict';
const Database = use('Database')
const _ = require('lodash');
const { forEach } = require('lodash');

class Datatable {
    limit(query, request) {
        if ('startRow' in request && 'rowsPerPage' in request && request.rowsPerPage !== 0) {
            query.offset(request.startRow).limit(request.rowsPerPage);
        }
    }

    order(query, request) {
        if ('sortBy' in request) {
            if ('descending' in request && request.descending) {
                query.orderBy(request.sortBy, 'desc');
            } else {
                query.orderBy(request.sortBy, 'asc');
            }
        }
    }

    filter(query, request, columns) {
        if (request.filter) {
            columns.forEach(col=>{
                if ('search' in col) query.where(col.db, `%${request.filter}%`);
            })
        }
    }

    whereRaw(query, where) {
        if (where && where.length !== 0) {
            where.forEach(el => {
                query.whereRaw(el)
            })
        }
    }

    async complex(request, table, primaryKey, columns, where) {
        let query = Database.from(table);
        this.filter(query, request, columns);
        this.whereRaw(query, where)
        let clone = query.clone();
        this.limit(query, request);
        this.order(query, request);
        query.select(_.map(columns, el => {
            return el.db;
        }));
        return {
            recordsTotal: (await Database.from(table).getCount()),
            recordsFiltered: (await clone.getCount()),
            rows: await query
        }

    }
}

module.exports = Datatable;