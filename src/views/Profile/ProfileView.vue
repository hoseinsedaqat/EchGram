<script lang="ts">
import Vue from "vue";
import ProfilePhoto from "./Components/ProfilePhoto.vue";
import ProfileInformation from "./Components/ProfileInformation.vue";
import ProfilePost from './Components/ProfilePost.vue'
export default Vue.extend({
  name: "ProfileView",
  components: {
    ProfilePhoto,
    ProfileInformation,
    ProfilePost
  },
});
</script>
<template>
  <section id="ProfileView">
    <div class="container">
      <div class="row">
        <ProfilePhoto></ProfilePhoto>
        <ProfileInformation></ProfileInformation>
      </div>
      <ProfilePost></ProfilePost>
    </div>
  </section>
</template>
