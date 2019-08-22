import Vue from 'vue';
import Vuex from 'vuex';
import Works from '@/works';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    works: Works,
    showModal: false,
    modalType: '',
    wid: '',
  },
  mutations: {
    showWorkModal(state, wid) {
      if (!wid) { return; }
      state.showModal = true;
      state.modalType = 'work';
      state.wid = wid;
      history.pushState( '', '', '?wid=' + wid);
    },
    showContactModal(state) {
      state.showModal = true;
      state.modalType = 'contact';
      history.pushState( '', '', '?contact=true');
    },
    hideModal(state) {
      state.showModal = false;
      history.pushState( '', '', location.pathname);
    },
    changeWid(state, wid) {
      state.wid = wid;
      history.pushState( '', '', '?wid=' + wid);
    },
  },
  actions: {},
});
