import { MutationTree } from "vuex";

import { directState } from "./types";

export const mutations: MutationTree<directState> = {
    showDirectTest:(state) => {
        state.noneDirect = false;
        state.directOne = true;
      },

    findDirect: (state,data) => {
        const findMsg = state.allDirects.find(direct => direct.whichDirect === data);
        state.getEachDirect = findMsg
        state.noneDirect = false;
        state.directOne = true;
    },

    addDirectMessage: (state,data) => {
      const findDirect = state.allDirects.find(direct => direct.whichDirect === data.whichDirect)
      if(findDirect){
        findDirect.chats.push({ Right:data.right })
      }
    }
}