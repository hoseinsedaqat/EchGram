import { RootState } from '@/store/type';
import { savedState } from './types'
import { GetterTree } from "vuex";

export const getters:GetterTree<savedState,RootState> = {
    returnSavedData:(state) => state.savedData
}