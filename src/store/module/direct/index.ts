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
        {
        chats:[
            {
                Left: 'threee',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 3
        },
        {
        chats:[
            {
                Left: 'four',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 4
        },
        {
        chats:[
            {
                Left: 'five',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 5
        },
        {
        chats:[
            {
                Left: 'six',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 6
        },
        {
        chats:[
            {
                Left: 'seven',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 7
        },
        {
        chats:[
            {
                Left: 'eight',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 8
        },
        {
        chats:[
            {
                Left: 'nine',
            },
            {
                Right: 'Ohuum',
            }
        ],
        whichDirect: 9
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