<script lang="ts">
import Vue from "vue";

import DirectLeftHeader from "./Components/DirectLeftHeader.vue";
import DirectLeftUsers from "./Components/DirectLeftUsers.vue";
import DirectRightNone from "./Components/DirectRightNone.vue";
import DirectRightHave from "./Components/DirectRightHave.vue";

export default Vue.extend({
  name: "DirectView",
  data() {
    return {
      mobileView: false,
    };
  },
  components: {
    DirectLeftHeader,
    DirectLeftUsers,
    DirectRightNone,
    DirectRightHave,
  },
  methods: {
    checkWidth() {
      if (window.innerWidth < 678) {
        this.mobileView = true;
      }
    },
  },
  mounted() {
    this.checkWidth();
  },
});
</script>

<template>
  <div class="container">
    <div class="row my-3 bg-white no-gutters">
      <!-- Define my Id -->
      <div class="col-md-4 d_hvh w-100 h-100">
        <direct-left-header></direct-left-header>
        <direct-left-users></direct-left-users>
      </div>
      <div class="col-md-8">
        <div class="d_bp w-100 h-100 text-center">
          <!-- When We are have no Direct Select -->
          <direct-right-none v-if="!mobileView"></direct-right-none>
          <!-- When We are have Direct -->
          <direct-right-have v-if="!mobileView"></direct-right-have>
        </div>
      </div>
    </div>
  </div>
</template>
