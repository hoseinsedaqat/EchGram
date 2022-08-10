<script>
import Vue from 'vue'
import {mapActions} from 'vuex'

export default Vue.extend({
    name:'DirectLeftUsers',
    data(){
      return {
        mobileView: false
      }
    },
    methods:{
      ...mapActions(['showDirectTest']),
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
    <!-- Create Two Mode for That One From Mobile And Twp From Lg Screen -->
            <div class="d-flex py-3 d_ph" @click="showDirectTest">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span class="font-weight-bold">Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <router-link class="d-flex py-3 d_ph d_mvl" to="/direct/inbox/2365415895475269">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span class="font-weight-bold">Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </router-link>
            <!-- <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div> -->
          </div>
</template>

