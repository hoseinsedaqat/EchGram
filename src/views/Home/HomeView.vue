<script lang="ts">
import Vue from "vue";
import SwiperStory from "./Components/SwiperStory.vue";
import PostLayout from "./Components/PostLayout.vue";
import HomeStickyNav from "./Components/HomeStickyNav.vue";

export default Vue.extend({
  data(){
    return {
      swiperSwitch: false
    }
  },
  components: {
    SwiperStory,
    PostLayout,
    HomeStickyNav,
  },
  name: "HomeView",
  mounted(){
    if(window.innerWidth < 678){
      this.swiperSwitch = true
    }
  }
});
</script>

<template>
  <section id="HomeLayout">
    <swiper-story v-if="swiperSwitch"></swiper-story>
    <post-layout v-if="swiperSwitch"></post-layout>
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
            <swiper-story v-if="!swiperSwitch"></swiper-story>
            <post-layout v-if="!swiperSwitch"></post-layout>
          </div>
          <!-- After Change Class Just Content Shuold Use Sticky Nav -->
          <div class="col-lg-4 col-md-4 ho_ps">
            <home-sticky-nav></home-sticky-nav>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>
