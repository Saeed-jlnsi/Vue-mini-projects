import Vue from 'vue';
import Vuex from 'vuex';
import Counter from './modules/counter';

import * as actions from './actions';
import * as getters from './getters';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        value: 0
    },
    getters,
    mutations,
    // actions: {
    //     increment: context => {
    //         context.commit('increment');
    //     }
    // },

    // WE USE DESTRUCTION TO USE ONLY THE COMMIT METHOD OF THE CONTEXT OBJECT: '{commit}'
    actions,
    modules: {
        Counter
    }
});