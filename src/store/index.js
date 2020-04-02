import Vue from "vue";
import Vuex from "vuex";
import Cookie from "cookie_js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        usname: sessionStorage.getItem('usname') || ''
    },
    getters: {

    },
    mutations: {
        SET_NAME(state, value) {
            state.usname = value;
            sessionStorage.setItem('usname', state.usname);
            Cookie.set('usname', state.usname)
        }
    },
    actions: {},
    modules: {}
});
