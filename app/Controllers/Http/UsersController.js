'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')
const Token = use('App/Models/Token')
const Encryption = use('Encryption')
const Drive = use('Drive')
const Helpers = use('Helpers')
const _ = require('lodash')
const dt = make('App/Libraries/Datatable')
const br = make('App/Libraries/BaseRepo')
const { str_random } = use('App/Helpers')
const Hash = use('Hash')
const Database = use('Database')
const moment = require('moment')
const Mail = use('Mail')
const Config = use('Config')

class UsersController {

    /**
     * @brief Login Authentication
     * @param {request} 
     * @param {auth} 
     */
    async login({ request, auth, response, session }) {
        const rules = {
            email: 'required|email',
            password: 'required'
        };
        const { email, password } = request.only(['email', 'password']);
        const validation = await validate({ email, password }, rules);
        if (!validation.fails()) {
            try {
                let tokens = await auth.withRefreshToken().attempt(email, password);
                let user = await User.query().where('email', email).select('id', 'username').first()
                let grants = await user.grants()
                grants = _.map(grants.rows, g => {
                    return g.grant_id
                });
                let row = {
                    userid: user.id,
                    username: user.username,
                    grants,
                    token: tokens.token,
                    refreshToken: tokens.refreshToken
                }
                br.createAction(request, 'D001', user.id, user.id);
                session.put('user', row)
                return {
                    code: 'Ok',
                    row
                }
            } catch (err) {
                response.status(401).send({ code: -1 });
            }
        } else {
            response.status(401).send({ code: -4 });
        }
    }

    /**
     * @brief Logout authentication
     * @param {*} param0 
     */
    async logout({ request, response, session, auth }) {
        try {
            const decrypted = Encryption.decrypt(session.get('user').refreshToken);
            const refreshToken = await Token.findBy('token', decrypted);
            if (refreshToken) {
                br.createAction(request, 'D002', auth.user.id, auth.user.id);
                refreshToken.delete();
                session.clear();
                response.status(200).send({ code: 'Ok' });
            } else {
                response.status(401).send({ code: 'Invalid refresh token' });
            }
        } catch (err) {
            response.status(401).send({ code: 'something went wrong' });
        }
    }

    async getUserPhotoById({ response, params }) {
        const user = await User.find(params.id);
        let photo;
        if (user === null || user.photo === null) {
            photo = await Drive.get(Helpers.publicPath('images/avatar.png'));
        } else {
            photo = user.photo;
        }
        response.header('Content-Type', 'image/jpeg')
            .header('Content-Transfer-Encoding', 'binary')
            .header('Cache-Control', 'public, max-age=10800, pre-check=10800');
        response.send(photo);
    }

    async getUserPhotoByEmail({ response, params }) {
        const user = await User.query().where('email', params.email).first();
        let photo;
        if (user === null || user.photo === null) {
            photo = await Drive.get(Helpers.publicPath('images/avatar.png'));
        } else {
            photo = user.photo;
        }
        response.header('Content-Type', 'image/jpeg')
            .header('Content-Transfer-Encoding', 'binary')
            .header('Cache-Control', 'public, max-age=10800, pre-check=10800');
        response.send(photo);
    }

    async fetch({ request }) {
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'username', search: true },
            { db: 'email', search: true },
            { db: 'banned' },
            { db: 'created_at' }
        ];
        try {
            result.dt = await dt.execute(request.all(), 'users', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getUserCommon(user_id) {
        let result = { code: 'Ok' };
        try {
            result.user = (await Database.raw('select id,username,email,IF(photo is null,null,"PHOTO") photo from users where id=?', [user_id]))[0][0];
            result.user.roles = await Database.from('users_grants').where('user_id', user_id).groupBy('rol_id').distinct().pluck('rol_id');
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async getCurrentUser({ auth }) {
        return await this.getUserCommon(auth.user.id)
    }

    async getUser({ request }) {
        return await this.getUserCommon(request.input('id'))
    }

    async store({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            let password = await str_random(32),
                user = request.all(),
                roles = request.input('roles')
            user.password = await Hash.make(password);
            const rules = {
                username: 'required',
                email: 'required|email',
                password: 'required',
                roles: 'required|array'
            };
            const validation = await validate(user, rules);
            if (validation.fails()) {
                result.code = 'validation fails'
                return result
            }
            delete user.roles
            if (user.photo) {
                let reg = /^data:image\/([\w+]+);base64,([\s\S]+)/;
                let match = user.photo.match(reg);

                if (!match) {
                    throw new Error('image base64 data error');
                }

                user.photo = Buffer.from(match[2], 'base64')
            }
            await Database.transaction(async (trx) => {
                user.created_at = user.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
                let record = await User.create(user, trx)
                await trx.insert(br.getActionData('D003', auth.user.id, request.ip(), record.id)).into('actions')
                let mr = roles.join(',');
                await trx.raw(`insert into users_grants select null,${record.id} as user_id,rol_id,grant_id from roles_grants where rol_id in (${mr})`)
            })
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async update({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            let user = request.all(),
                roles = request.input('roles')
            const rules = {
                username: 'required',
                email: 'required|email',
                roles: 'required|array'
            };
            const validation = await validate(user, rules);
            if (validation.fails()) {
                result.code = 'validation fails'
                return result
            }
            delete user.roles
            if (user.photo) {
                let reg = /^data:image\/([\w+]+);base64,([\s\S]+)/;
                let match = user.photo.match(reg);

                if (!match) {
                    throw new Error('image base64 data error');
                }

                user.photo = Buffer.from(match[2], 'base64')
            }
            await Database.transaction(async (trx) => {
                user.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
                let record = await User.findOrFail(user.id)
                await trx.from('users_grants').where('user_id', user.id).delete()
                await trx.from('users').where('id', user.id).update(user)
                await trx.insert(br.getActionData('D004', auth.user.id, request.ip(), JSON.stringify(record))).into('actions')
                let mr = roles.join(',');
                await trx.raw(`insert into users_grants select null,${user.id} as user_id,rol_id,grant_id from roles_grants where rol_id in (${mr})`)
            })
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async destroy({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            br.commonDestroy(User, request, 'D005', auth.user.id);
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async setBanned({ request, auth }) {
        let result = { code: 'Ok' };
        try {
            let user = request.all()
            await Database.transaction(async (trx) => {
                user.updated_at = moment().format('YYYY-MM-DD HH:mm:ss')
                await trx.from('users').where('id', user.id).update(user)
                await trx.insert(br.getActionData('D025', auth.user.id, request.ip(), user.id)).into('actions')
            })
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }

    async forgotPassword({ request }) {
        let result = { code: 'Ok' }, trx = void 0;
        try {
            const validation = await validate(request.all(), {
                email: 'required|email'
            });
            if (validation.fails()) {
                result.code = -4
                return result
            }
            let password = await str_random(32),
                user = await User.query().where('email', request.input('email')).first()
            if (!user) {
                result.code = -1
                return result
            }
            if (user.banned === '1') {
                result.code = -2
                return result
            }
            trx = await Database.beginTransaction()
            user.password = password
            await user.save()
            await Mail.send('mails.forgotPassword', { password }, (msg) => {
                msg.to(user.email).from(Config.get('app.sysmail'))
                    .subject('Nueva Contraseña Solicitada');
            })
            await trx.commit()
        } catch (e) {
            await trx.rollback()
            result.code = e.message;
        }
        return result;
    }
}

module.exports = UsersController
