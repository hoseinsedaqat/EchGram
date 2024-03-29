import { RootState } from "@/store/type";

import { ActionTree } from "vuex";

import { directState } from './types';

export const actions: ActionTree<directState, RootState> = {

    showDirectTest: (context) => {
        context.commit('showDirectTest')
    },

    findDirect: (context,data) => {
      context.commit('findDirect', data)
    },

    addDirectMessage: (context,data) => {
      context.commit('addDirectMessage', data)
    }
      
}

