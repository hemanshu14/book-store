import { actions } from '@/constants/constants';

export default {
  state: {
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    }
  },
  actions: {
    clearError({ commit }) {
      commit(actions.clearError);
    },

    setError({ commit }, payload) {
      commit(actions.setError, payload);
    },
  },
  getters: {
    loading(state) {
      return state.loading;
    },
    error(state) {
      return state.error;
    },
  },
};
