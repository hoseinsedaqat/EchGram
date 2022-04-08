import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    noneDirect:true,
    directOne:false
  },
  getters: {
  },
  mutations: {
    showDirectTest:(state)=>{
      state.noneDirect = false;
      state.directOne = true
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
