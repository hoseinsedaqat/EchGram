<script lang="ts">
import Vue from 'vue'
import { mapGetters,mapActions } from 'vuex'

export default Vue.extend({
    name:'DirectRightHave',
    data(){
      return {
        message: ''
      }
    },
    computed:{
        ...mapGetters(['returnDirectOne','returnEachDirect'])
    },
    methods:{
      ...mapActions(['showDirectTest','findDirect','addDirectMessage']),
      addDM(){
        this.addDirectMessage({right:this.message,whichDirect:this.returnEachDirect.whichDirect})
        this.message = ''
      }
    },
    async created(){
      if(window.innerWidth < 678){
        if(this.$route.params.id){
          await this.findDirect(Number(this.$route.params.id))
        }
        await this.showDirectTest()
      }
    }
})
</script>

<template>
  <div v-if="returnDirectOne">
              <div class="w-100 h-100 d_bp">
                <!-- {{ returnEachDirect.chats }} -->
                <!-- Direct Msg Header -->
                <div class="d-flex align-items-center justify-content-between d_mfhm mx-5">
                <span>
                  <img class="mr-3" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinMessage"  width="30px" style="border-radius:50%;">
                  <!-- <small class="font-weight-bold">{{ returnEachDirect.whichDirect }}</small> -->
                </span>
                <span class="h_lcp">
                  <svg aria-label="View Thread Details" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                </span>
              </div>
              </div>
              <div style="height:65vh;" class="d_of">
              <!-- Direct Msg Header -->
              <!-- Im Should use Class right and left in Data -->
              <p v-for="(pm,idx) in returnEachDirect.chats" :key="(pm,idx)" :class="pm.Left ? 'text-left people-message-margin' : 'text-right you-message-margin'">
                <span :class="pm.Left ? 'people-message' : 'you-message my-2'">{{ pm.Left ? pm.Left : pm.Right }}</span>
              </p>
              </div>
              <div class="w-100 h-100 d_bt">
              <!-- Direct Msg Header -->
                <div class="mx-5">
                  <span class="d-flex align-items-center justify-content-center d_my">
                    <input type="text" class="d_idm" placeholder="Message..." @keyup.enter="addDM()" v-model="message">
                      <svg @click="addDM()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-send _8-yf5 d_ms h_lcp" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                      </svg>
                  </span>
                </div>
              </div>
            </div>
</template>
