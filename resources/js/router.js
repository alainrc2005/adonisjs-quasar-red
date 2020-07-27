import Vue from 'vue'
import VueRouter from 'vue-router'

import Dashboard from './views/dashboard'
import Login from './views/login'
import Entities from './views/entities'

import store from './store'
import * as roles from './grants'

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Dashboard, name: 'dashboard', meta: {auth: true}},
        {
            path: '/login', component: Login,
            beforeEnter: (to, from, next) => {
                if (store.state.main.logged) next("/");
                else next();
            }
        },
        {
            path: '/logout', meta: {auth: true},
            async beforeEnter(to, from, next) {
                let d = await store.dispatch('main/Logout');
                if (d.code !== "Ok") return next('/');
                store.commit('main/setMain', {userid: null, username: null, token: null, logged: false, drawer: false});
                next('/login');
            }
        },
        {path: '/entities', component: Entities, name: 'entities', meta: {auth: true}},
        {path: '/entity/:action', component: () => import('./views/entities_ne'), name: 'entities_ne', meta: {auth: true, grant: roles.gEntities}},
        {path: '/speeds', component: () => import('./views/speeds'), name: 'speeds', meta: {auth: true, grant: roles.vSpeeds}},
        {path: '/resources', component: () => import('./views/resources'), name: 'resources', meta: {auth: true, grant: roles.vResources}},
        {path: '/provinces', component: () => import('./views/provinces'), name: 'provinces', meta: {auth: true, grant: roles.vProvinces}},
        {path: '/municipalities', component: () => import('./views/municipalities'), name: 'municipalities', meta: {auth: true, grant: roles.vMunicipalities}},
        {path: '/profile', component: () => import('./views/profile'), meta: {auth: true}},
        {
            path: '/admin', component: () => import('./views/admin/admin'), meta: {auth: true},
            beforeEnter: (to, from, next) => {
                store.commit("main/setMain", {
                    linksUp: [
                        {icon: 'mdi-monitor-dashboard', text: 'Dashboard', link: '/'},
                        {
                            icon: 'mdi-account-group',
                            text: 'Usuarios',
                            link: '/admin/users',
                            visible: _.indexOf(store.state.main.grants, roles.vUsers) !== -1
                        },
                        {
                            icon: 'mdi-group',
                            text: 'Roles',
                            link: '/admin/roles',
                            visible: _.indexOf(store.state.main.grants, roles.vRoles) !== -1
                        },
                        {
                            icon: 'mdi-format-list-bulleted-type',
                            text: 'Acciones',
                            link: '/admin/logs',
                            visible: _.indexOf(store.state.main.grants, roles.vActions) !== -1
                        },
                    ]
                });
                next()
            },
            children: [
                {path: '', component: () => import('./views/admin/dashboard'), meta: {auth: true}},
                {
                    path: 'roles',
                    component: () => import('./views/admin/roles'),
                    meta: {auth: true, grant: roles.gRoles}
                },
                {
                    path: 'users',
                    component: () => import('./views/admin/users'),
                    meta: {auth: true, grant: roles.gUsers}
                },
                {
                    path: 'logs',
                    component: () => import('./views/admin/logs'),
                    meta: {auth: true, grant: roles.vActions}
                },
                {path: '*', redirect: '/admin'},
            ]
        },
        {
            path: '*', redirect: '/'
        }

    ]
})

router.beforeEach((to, from, next) => {
    store.commit('main/setMain', {help: false});
    if (!_.startsWith(to.path, '/admin')) {
        store.commit("main/setMain", {
            linksUp: [
                {icon: 'mdi-monitor-dashboard', text: 'Dashboard', link: '/'},
                {
                    icon: 'mdi-ip-network',
                    text: 'Entidades',
                    link: '/entities',
                    visible: _.indexOf(store.state.main.grants, roles.vEntities) !== -1
                }
            ]
        });
    }
    store.commit("main/setMain", {
        linksDown: [
            {
                icon: 'mdi-cogs',
                text: 'Administración',
                link: '/admin',
                visible: _.indexOf(store.state.main.grants, roles.vAdmin) !== -1
            },
            {icon: 'mdi-logout', text: 'Salir', link: '/logout', visible: store.state.main.logged},
            {icon: 'mdi-login', text: 'Entrar', link: '/login', visible: !store.state.main.logged},
        ]
    });
    if (to.matched.some(record => record.meta.auth)) {
        if (!store.state.main.logged) return next({path: "/login"});
    }
    if (to.meta.grant && _.indexOf(store.state.main.grants, to.meta.grant) === -1) {
        return next("/");
    }
    next();
});


export default router;