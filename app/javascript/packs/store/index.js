import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showDropdown: false,
        login: false,
        posts: [],
        // other possible values are 'success' and 'failure' 
        publishStatus: 'draft'
    },

    mutations,
    getters,
    actions
})