import Vue from 'vue';

import Vuex from 'vuex';

import { RootState } from './type';

import { diret } from './module/direct';

import { profile } from './module/profile';

import { saved } from './module/saved';

Vue.use(Vuex)

export default new Vuex.Store<RootState>({
  state: { hosein:"Hosein Sedaqat" },
  modules: { diret, profile, saved }
});
