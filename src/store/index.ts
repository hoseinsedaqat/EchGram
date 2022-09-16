import Vue from 'vue'
import Vuex from 'vuex'
import { RootState } from './type'
import { diret } from './module/direct'
import { profile } from './module/profile'
import { saved } from './module/saved'

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  // this is simple and stupid for write vuex right so i refactor it later
  state: {
    hosein:"Hosein Sedaqat",
  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    diret,
    profile,
    saved
  }
})
