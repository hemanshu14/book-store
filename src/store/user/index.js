import router from '../../router/index';
import {actions, routes} from '@/constants/constants';
import data from '../data/userData.json';

export default {
    state: {
        user: null,
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
    },
    actions: {
        signIn({commit}, payload) {
            commit(actions.setLoading, true);
            commit(actions.clearError);
            data.forEach(user => {
                if (user.emailId === payload.email && user.password === payload.password) {
                    commit(actions.setLoading, false);
                    commit(actions.setUser, user);
                }
                else{
                    const error = {
                        code: 'user-not-found',
                        message: 'User is not found'
                    }
                    commit(actions.setLoading, false);
                    commit(actions.setError, error);
                }
            })
        },

        logout({commit}) {
            commit(actions.setUser, null);
            router.push(routes.beginPage);
        },

        autoSignIn({ commit }, payload) {
            commit(actions.setUser, {
                emailId: payload.emailId,
                password: payload.password
            });
        },
    },
    getters: {
        user(state) {
            return state.user;
        },
    },
};
