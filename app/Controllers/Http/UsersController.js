'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')
const Token = use('App/Models/Token')
const Encryption = use('Encryption')
const Drive = use('Drive')
const Helpers = use('Helpers')
const _ = require('lodash')
const dt = make('App/Libraries/Datatable')

class UsersController {

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

    async logout({ response, session }) {
        try {
            const decrypted = Encryption.decrypt(session.get('user').refreshToken);
            const refreshToken = await Token.findBy('token', decrypted);
            if (refreshToken) {
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

    async fetch({ request }){
        let result = { code: 'Ok' };
        let $columns = [
            { db: 'id' },
            { db: 'username', search: true },
            { db: 'email', search: true },
            { db: 'banned' },
            { db: 'created_at' }
        ];
        try {
            result.dt = await dt.complex(request.all(), 'users', 'id', $columns)
        } catch (e) {
            result.code = e.message;
        }
        return result;
    }
}

module.exports = UsersController
