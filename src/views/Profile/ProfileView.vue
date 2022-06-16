<script lang="ts">
import Vue from "vue";
import ProfilePhoto from "./Components/ProfilePhoto.vue";
import ProfileInformation from "./Components/ProfileInformation.vue";
import ProfilePost from "./Components/ProfilePost.vue";
import ProfileFooter from './Components/ProfileFooter.vue'
export default Vue.extend({
  name: "ProfileView",
  components: {
    ProfilePhoto,
    ProfileInformation,
    ProfilePost,
    ProfileFooter
  },
});
</script>
<template>
  <section id="ProfileView">
    <div class="container">
      <div class="row">
        <profile-photo></profile-photo>
        <profile-information></profile-information>
      </div>
      <profile-post></profile-post>
      <profile-footer></profile-footer>
    </div>
  </section>
</template>
