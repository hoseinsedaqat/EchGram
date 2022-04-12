import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // this is simple and stupid for write vuex right so i refactor it later
  state: {
    noneDirect:true,
    directOne:false,
    hosein:"Hosein Sedaqat"
  },
  getters: {
  },
  mutations: {
    showDirectTest:(state) => {
      state.noneDirect = false;
      state.directOne = true;
    }
  },
  actions: {
    showDirectTest:(context) => {
      context.commit('showDirectTest')
    }
  },
  modules: {
  }
})
