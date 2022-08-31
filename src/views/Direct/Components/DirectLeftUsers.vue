<script>
import Vue from 'vue';

import { mapActions } from 'vuex';

import directData from '@/data/directData'

export default Vue.extend({
    name:'DirectLeftUsers',
    data(){
      return {
        mobileView: false,
        directData
      }
    },
    methods:{
      ...mapActions(['showDirectTest','findDirect']),
      checkWidth(){
        if(window.innerWidth < 678) {
          this.mobileView = true
        }
      }
    },
    mounted(){
      this.checkWidth()
    }
})
</script>

<template>
  <div class="d_bp d_of d_dfb">
    <!-- Create Two Mode for That One From Mobile And Two From Lg Screen -->
            <div v-if="!mobileView">
              <div v-for="(userDirect,idx) in directData" :key="(userDirect,idx)" class="d-flex py-3 d_ph" @click="findDirect(userDirect.findDirect)">
                <span class="mx-2">
                  <img :src="userDirect.img" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span class="font-weight-bold">{{ userDirect.name }}</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
              </div>
            </div>
            <div v-if="mobileView">
               <router-link v-for="(userDirect,idx) in directData" :key="(userDirect,idx)"  class="d-flex py-3 d_ph d_mvl" :to="`/direct/inbox/${userDirect.findDirect}`" >
                <span class="mx-2">
                  <img :src="userDirect.img" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span class="font-weight-bold">{{ userDirect.name }}</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </router-link>
            </div>
          </div>
</template>

