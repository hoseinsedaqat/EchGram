<script lang="ts">
import Vue from "vue";
import HeaderIcons from "./Components/HeaderIcons.vue";
import MagnifireSvg from "./Components/MagnifireSvg.vue";

export default Vue.extend({
  name: "HeaderLayout",
  components: {
    MagnifireSvg,
    HeaderIcons,
  },
});
</script>
HeaderIcons

<template>
  <header class="bg-white py-1 h_lb" id="h_bh">
    <div class="container">
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
  </header>
</template>

<style>
:root {
    --bbc: #dbdbdb;
    --hin: #efefef;
    --hinp: #888;
}



.h_lb {
    border-bottom: 1px solid var(--bbc);
}

.h_py {
    padding: 0.8rem 0;
}

.h_in {
    position: relative;
    min-width: 268px;
    height: 36px;
    border-radius: 8px;
    background-color: var(--hin);
    font-size: 16px;
    border: none;
    padding: 3px 35px;
}

.h_in:focus {
    outline: none;
}

.h_inp {
    color: var(--hinp);
    position: absolute;
    top: 3.5px;
    left: 25px;
}

.h_mti {
    margin-top: 0.5rem !important;
}

.h_lcp {
    cursor: pointer;
}

#h_bh {
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;
}
</style>