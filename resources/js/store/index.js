import Vue from 'vue'
import Vuex from 'vuex'

import main from './main'
import help from './help'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        main,
        help
    },
    strict: true
});

export default store;