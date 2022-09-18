import { RootState } from '@/store/type';

import { savedState } from './types';

import { ActionTree } from 'vuex';

export const actions: ActionTree<savedState, RootState> = {
    
    addSaved:(context,data) => {
        context.commit('addSaved',data)
    },

    removeSaved:(context,id) => {
        context.commit('removeSaved',id)
    }
}