import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // this is simple and stupid for write vuex right so i refactor it later
  state: {
    noneDirect:true,
    directOne:false,
    hosein:"Hosein Sedaqat",
    showModal: false
  },
  getters: {
    show_hide_modal:(state) => state.showModal
  },
  mutations: {
    showDirectTest:(state) => {
      state.noneDirect = false;
      state.directOne = true;
    },
    showModal:(state) => {
      state.showModal = true
    },
    closeModal: (state)=> {
      state.showModal = false
    }
  },
  actions: {
    showDirectTest:(context) => {
      context.commit('showDirectTest')
    },
    showModal:(context) => {
      context.commit('showModal')
    },
    closeModal: (context) => {
      context.commit('closeModal')
    }
  },
  modules: {
  }
})
