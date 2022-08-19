import { MutationTree } from "vuex";
import { directState } from "./types";

export const mutations:MutationTree<directState> = {
    showDirectTest:(state) => {
        state.noneDirect = false;
        state.directOne = true;
      },
      findDirect: (state,data) => {
        const findMsg = state.allDirects.find(direct => direct.whichDirect === data);
        state.getEachDirect = findMsg
        state.noneDirect = false;
        state.directOne = true;
        console.log(findMsg);
      }
}