import { RootState } from "@/store/type";
import { Module } from "vuex";
import { directState } from './types';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';

import Hosein from '@/assets/Images/User/Hosein_instagram_Picture.jpg';

import Avicii from '@/assets/Images/User/Avicii_instagram_Picture.jpg';

import Nima from '@/assets/Images/User/Nima_instagram_Picture.jpg';

import Zoheir from '@/assets/Images/User/Zoheir_instagram_Picture.jpg';

import Evan from '@/assets/Images/User/Evan_instagram_Picture.jpg';

import MohammadReza from '@/assets/Images/User/MohammadReza_instagram_Picture.jpg';

import Jadi from '@/assets/Images/User/Jadi_instagram_Picture.jpg';

import Pouya from '@/assets/Images/User/Pouya_instagram_Picture.jpg';

import Farzad from '@/assets/Images/User/Farzad_instagram_Picture.jpg';

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
        whichDirect: 1,
        directImg: Hosein,
        userName: 'Hosein'
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
        whichDirect: 2,
        directImg: Avicii,
        userName: 'Avicii'
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
        whichDirect: 3,
        directImg: Nima,
        userName: 'Nima'
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
        whichDirect: 4,
        directImg: Zoheir,
        userName: 'Zoheir'
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
        whichDirect: 5,
        directImg: Evan,
        userName: 'Evan'
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
        whichDirect: 6,
        directImg: MohammadReza,
        userName: 'MohammadReza'
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
        whichDirect: 7,
        directImg: Jadi,
        userName: 'Jadi'
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
        whichDirect: 8,
        directImg: Pouya,
        userName: 'Pouya'
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
        whichDirect: 9,
        directImg: Farzad,
        userName: 'Farzad'
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