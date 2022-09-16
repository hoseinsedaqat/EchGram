import { MutationTree } from 'vuex';
import { savedState } from './types';

export const mutations:MutationTree<savedState> = {
    addSaved:(state,data) => {
        state.savedData.push(data)
    }
}