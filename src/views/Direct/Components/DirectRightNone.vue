<script>
import Vue from 'vue'
import { mapGetters } from 'vuex'

export default Vue.extend({
    name:"DirectRightNone",
    computed:{
    ...mapGetters(['returnNoneDirect'])
  },
})

</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100" v-if="returnNoneDirect">
            <h3 class="d_echl">Echgram</h3>
            <p class="h5">Your Messages</p>
            <span class="text-muted">
              Send private photos and messages to a friend or group.
            </span>
            <button class="btn btn-primary w-50 my-3">Send Message</button>
    </div>
</template>