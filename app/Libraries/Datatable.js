'use strict';
/*
|--------------------------------------------------------------------------
| Autor: Lic. Alain Ramirez Cabrejas
|--------------------------------------------------------------------------
| startRow: startRow = (page - 1) * rowsPerPage
| rowsPerPage: Filas por páginas
| filter: string a buscar en todas las columnas que se determine en columns
| sortBy: Columna para realizar el ordenamiento
| descending: Tipo de ordenamiento ascesdente (asc) o descendente (desc)
|--------------------------------------------------------------------------
*/

const Database = use('Database')

class Datatable {
    limit(query, request) {
        if ('startRow' in request && 'rowsPerPage' in request && request.rowsPerPage !== 0) {
            query.offset(request.startRow).limit(request.rowsPerPage);
        }
    }

    order(query, request) {
        if ('sortBy' in request && request.sortBy !== null) {
            if ('descending' in request && request.descending) {
                query.orderBy(request.sortBy, 'desc');
            } else {
                query.orderBy(request.sortBy, 'asc');
            }
        }
    }

    filter(query, request, columns) {
        if ('filter' in request && request.filter !== null) {
            columns.forEach(col => {
                if ('search' in col) query.orWhereRaw(`${col.db} like '%${request.filter}%'`);
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
        query.select(columns.map(el => {
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