<script lang="ts">

import Vue from "vue";

import profilePost from '@/data/profilePost'

export default Vue.extend({
  name: "ProfilePost",

  data(){
    return {
      profilePost
    }
  }
  
});
</script>

<template>
  <div class="row mt-5">
    <div v-for="(post,idx) in profilePost" :key="(post,idx)" class="col-md-4">
      <router-link :to="`/post/hoseinsedaqat/${post.id}`">
        <div class="img-post-overlay my-3">
          <img
            :src="post.postImg"
            :alt="`PostOne ${idx + 1}`"
            class="p-image-post"
          />
          <div class="overlay">
            <div class="text-overlay"><i class="fa fa-heart"></i> {{ post.like }}</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
