import { RootState } from "@/store/type";

import { Module } from "vuex";

import { getters } from "./getters";

import { actions } from "./actions";

import { mutations } from "./mutations";

import { profileState } from "./types";

const state: profileState = {
    showModal: false
}

export const profile: Module<profileState, RootState> = {
    state,
    getters,
    mutations,
    actions
}