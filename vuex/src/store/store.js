import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => {
            return state.counter * 2;
        },
        stringCounter: state => {
            return state.counter + " clicks";
        },
        value: state => {
            return state.value;
        }
    },
    mutations: {
        increment: (state, payload) => {
            state.counter += payload;
        },
        decrement: (state, payload) => {
            state.counter -= payload;
        },
        updateValue: (state, payload) => {
            state.value = payload;
        }
    },
    // actions: {
    //     increment: context => {
    //         context.commit('increment');
    //     }
    // },

    // WE USE DESTRUCTION TO USE ONLY THE COMMIT METHOD OF THE CONTEXT OBJECT: '{commit}'
    actions: {
        increment: ({commit}, payload) => {
            commit('increment', payload);
        },
        decrement: ({commit}, payload) => {
            commit('decrement', payload);
        },
        // HERE THE PAYLOAD PARAMETER IS AN OBJECT, AND WE USED IT AS AN OBJECT('payload.by' and 'payload.duration')
        asyncIncrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('increment', payload.by);
            }, payload.duration);
        },
        asyncDecrement: ({commit}, payload) => {
            setTimeout(() => {
                commit('decrement', payload.by);
            },  payload.duration);
        },
        updateValue: ({commit}, payload) => {
            commit('updateValue', payload);
        }
    }
});