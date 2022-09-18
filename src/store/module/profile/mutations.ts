import { profileState } from "./types";

import { MutationTree } from "vuex";

export const mutations: MutationTree<profileState> = {

    showModal: (state) => {
        state.showModal = true
    },
}