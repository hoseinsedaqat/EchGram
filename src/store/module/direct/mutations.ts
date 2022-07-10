import { MutationTree } from "vuex";
import { directState } from "./types";

export const mutations:MutationTree<directState> = {
    showDirectTest:(state) => {
        state.noneDirect = false;
        state.directOne = true;
      },
}