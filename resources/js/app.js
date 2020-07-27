import Vue from 'vue'
import Vuex from 'vuex'
import Quasar from 'quasar'
import langQ from 'quasar/lang/es'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import store from './store'
import router from './router'
import {Error} from './helpers'
import * as resources from './resources'
import App from './app.vue'
import moment from 'moment'

if (window.utkn) {
    store.commit('main/setMain', {logged: true, token: window.utkn, refreshToken: window.urtkn, grants: window.ug, userid: window.uid});
}

const axiosContext = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
    },
    withCredentials: true
});
axiosContext.interceptors.request.use(config => {
    config.headers.Authorization = store.getters["main/AuthorizationCode"];
    return config;
});
axiosContext.interceptors.response.use(response => {
    if (response.data.code === "session timeout") {
        window.location = '/';
        return;
    }
    return response;
}, error => {
    if (error.response && error.response.status === 419) {
        console.log('419: ' + error);
        Error.call(window.app, resources.eSession);
        window.location = '/';
        return;
    }
    return Promise.reject(error);
});
Vue.prototype.$axios = axiosContext;
Vuex.Store.prototype.$axios = axiosContext;
Vue.prototype.$ld = require('lodash');

Vue.use(Quasar, {
    lang: langQ,
    config: {
        brand: {
            primary: '#6200EE',
            secondary: '#03DAC5',
            accent: '#9C27B0',

            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
});

Vue.filter('formatDateTime', function (value) {
    if (!value) return ''
    return moment(value,'YYYY-MM-DD HH:mm').format('DD/MM/YYYY HH:mm')
})

Vue.use(Vuelidate);

window.app = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});