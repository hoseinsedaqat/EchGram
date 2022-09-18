import { RootState } from '@/store/type';

import { GetterTree } from 'vuex';

import { directState } from './types';

export const getters: GetterTree<directState, RootState> = {
    
    returnNoneDirect: (state) => state.noneDirect,

    returnDirectOne: (state) => state.directOne,

    returnEachDirect: (state) => state.getEachDirect,

    returnAllDirect: (state) => state.allDirects
}