<script lang="ts">
import Vue from "vue";

import { mapGetters } from 'vuex'

export default Vue.extend({
  name: "SavedView",
  computed: {
    ...mapGetters(['returnSavedData'])
  }
});
</script>

<template>
  <section id="saved">
    <div class="container">
      <h3 class="text-center mt-5 mb-3" v-if="returnSavedData.length > 0">Saved Posts</h3>
      <h3 class="text-center mt-3 mb-3" v-else>You haven't any saved post</h3>
      <div class="row" v-if="returnSavedData.length > 0">
        <div class="col-md-4 my-2 s_mts" v-for="(save,idx) in returnSavedData" :key="(save,idx)">
          <img :src="save.imgSave" :alt="`Img saved ${idx}`" class="img-fluid w-100 h-100">
        </div>
      </div>
    </div>
  </section>
</template>
