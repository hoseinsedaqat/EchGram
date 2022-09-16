import { MutationTree } from 'vuex';
import { savedState } from './types';

export const mutations:MutationTree<savedState> = {
    addSaved:(state,data) => {
        state.savedData.push(data)
    },
    removeSaved:(state,id) => {
        const findSituation = state.savedData.findIndex(save => save.imgSave === id)
        state.savedData.splice(findSituation,1)
    }
}