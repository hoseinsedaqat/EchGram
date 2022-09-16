import { savedState } from './types';
import { RootState } from '@/store/type';
import { Module } from 'vuex';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state:savedState = {
    savedData:[]
}


export const saved:Module<savedState,RootState> = {
    state,
    getters,
    mutations,
    actions
}