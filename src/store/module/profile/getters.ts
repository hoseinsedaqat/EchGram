import { RootState } from "@/store/type";
import { profileState } from "./types";
import { GetterTree } from "vuex";

export const getters:GetterTree<profileState,RootState> = {
   show_hide_modal:(state) => state.showModal
}