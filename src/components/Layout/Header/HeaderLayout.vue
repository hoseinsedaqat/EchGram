<template>
  <header class="bg-white py-1 hlb">
    <div class="container">
      <div class="row mt-1">
        <div class="col-md-4 align-self-center">
          <img src="@/assets/Images/Header/735145cfe0a4.png" alt="EchGram Logo" />
        </div> 
        <div class="col-md-4 align-self-center">
          <div>
          <input type="text" name="search" id="search" class="hin" placeholder="Search"/>
          <label for="search" class="hinp">
              <magnifire-svg></magnifire-svg>
          </label>
          </div>
        </div>
        <div class="col-md-4 hmti">
          <div>
            <ul class="d-flex align-items-end justify-content-around">
            <router-link to="/" class="mr-3">
              <home-svg></home-svg>
            </router-link>
            <router-link to="/direct/inbox" class="mr-3">
              <direct-svg></direct-svg>
            </router-link>
            <li class="mr-3">
              <file-svg></file-svg>
            </li>
            <router-link to="/explore" class="mr-3">
              <svg class="_8-yf5" aria-label="Find People" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon><polygon fill-rule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle></svg>
            </router-link>
            <router-link to="/accounts/activity" class="mr-3">
              <svg class="_8-yf5 router-link-active router-link-exact-active" aria-label="Activity Feed" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
            </router-link>
            <li class="mr-3">
              <div class="dropdown">
                <img type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" src="@/assets/Images/Header/HoseinSedaqat.jpg" width="24px" height="24px" style="border-radius:50%;" alt="">
                  <div class="dropdown-menu dropdown-menu-right mt-3" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </div>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import MagnifireSvg from './Components/MagnifireSvg.vue'
import HomeSvg from './Components/HomeSvg.vue'
import DirectSvg from './Components/DirectSvg.vue'
import FileSvg from './Components/FileSvg.vue'
export default Vue.extend({
  name: "HeaderLayout",
  components:{
    MagnifireSvg,
    HomeSvg,
    DirectSvg,
    FileSvg
  }
});
</script>

<style scoped>
@import url("./Header.css");
</style>
