import { RootState } from "@/store/type";
import { profileState } from "./types";
import { ActionTree } from "vuex";

export const actions:ActionTree<profileState,RootState> = {
    showModal:(context) => {
        context.commit('showModal')
      },
}