<script lang="ts">
import Vue from "vue";

import DirectRightNone from "./DirectRightNone.vue";
import DirectRightHave from "./DirectRightHave.vue";

export default Vue.extend({
  name: "DirectView",
  components: {
    DirectRightNone,
    DirectRightHave,
  },
});
</script>

<template>
  <div class="container">
    <div class="row my-3 bg-white no-gutters">
      <div class="col-md-8">
        <div class="d_bp w-100 h-100 text-center">
          <!-- When We are have no Direct Select -->
          <direct-right-none></direct-right-none>
          <!-- When We are have Direct -->
          <direct-right-have></direct-right-have>
        </div>
      </div>
    </div>
  </div>
</template>
