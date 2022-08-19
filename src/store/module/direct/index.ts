import { RootState } from "@/store/type";
import { Module } from "vuex";
import { directState } from './types';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

const state:directState = {
    noneDirect: true,
    directOne: false,
    allDirects:[
        {
        chats:[
            {
                Left: 'Hi Hosein',
            },
            {
                Right: 'Hello Man',
            }
        ],
        whichDirect: 1
        },
        {
        chats:[
            {
                Left: 'Oh Damn Boy',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 2
        },
    ],
    getEachDirect:{}
};

export const diret:Module<directState,RootState> = {
    state,
    getters,
    mutations,
    actions
 }