import { RootState } from "@/store/type";
import { Module } from "vuex";
import { directState } from './types';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state:directState = {
    noneDirect: true,
    directOne: false,
};

export const diret:Module<directState,RootState> = {
    state,
    getters,
    mutations,
    actions
 }