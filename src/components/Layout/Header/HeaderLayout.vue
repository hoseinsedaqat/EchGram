<script lang="ts">

import Vue from 'vue';
import HeaderIcons from './Components/HeaderIcons.vue';
import MagnifireSvg from './Components/MagnifireSvg.vue';

export default Vue.extend({
  name: "HeaderLayout",
  components:{
    MagnifireSvg,
    HeaderIcons
  }
});
</script>
    HeaderIcons


<template>
  <header class="bg-white py-1 hlb" id="hbh">
    <div class="container">
      <div class="row mt-1">
        <!-- Logo -->
        <div class="col-md-4 align-self-center">
          <img src="@/assets/Images/Header/735145cfe0a4.png" alt="EchGram Logo" />
        </div> 
        <!-- Header Input -->
        <div class="col-md-4 align-self-center">
          <div>
          <input type="text" name="search" id="search" class="hin" placeholder="Search"/>
          <label for="search" class="hinp">
              <magnifire-svg></magnifire-svg>
          </label>
          </div>
        </div>
        <!-- Icons Route -->
        <div class="col-md-4 hmti">
          <div>
            <header-icons></header-icons>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import url("./Header.css");
</style>
