import Vue from 'vue';
import Vuex from 'vuex';
import Works from '@/assets/works';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modal: '',
    works: Works,
  },
  mutations: {
    showModal(state, id) {
      state.modal = id;
    },
    hideModal(state) {
      state.modal = '';
    },
  },
  actions: {},
});
