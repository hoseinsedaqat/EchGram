<script lang="ts">
import Vue from "vue";
import HeaderIcons from "./Components/HeaderIcons.vue";
import MagnifireSvg from "./Components/svg/MagnifireSvg.vue";
import MobileHeader from './Components/MobileHeader.vue';
import MobileSticky from './Components/MobileSticky.vue'

export default Vue.extend({
  name: "HeaderLayout",
  components: {
    MagnifireSvg,
    HeaderIcons,
    MobileHeader,
    MobileSticky
  },
});
</script>

<template>
  <header class="bg-white py-1 h_lb" id="h_bh">
    <div class="container desktop-menu">
      <div class="row mt-1">
        <!-- Logo -->
        <div class="col-md-4 align-self-center">
          <router-link to="/">
            <img src="@/assets/Images/Header/735145cfe0a4.png" alt="EchGram Logo" />
          </router-link>
        </div>
        <!-- Header Input -->
        <div class="col-md-4 align-self-center">
          <div>
            <input
              type="text"
              name="search"
              id="search"
              class="h_in"
              placeholder="Search"
            />
            <label for="search" class="h_inp">
              <magnifire-svg></magnifire-svg>
            </label>
          </div>
        </div>
        <!-- Icons Route -->
        <div class="col-md-4 h_mti">
          <div>
            <header-icons></header-icons>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-menu">
      <mobile-header></mobile-header>
    </div>
    <div class="mobile-sticky">
      <mobile-sticky></mobile-sticky>
    </div>
  </header>
</template>