<script lang="ts">

import Vue from 'vue'
import MagnifireSvg from './Components/MagnifireSvg.vue'
import HomeSvg from './Components/HomeSvg.vue'
import DirectSvg from './Components/DirectSvg.vue'
import FileSvg from './Components/FileSvg.vue'
import ExploreSvg from './Components/ExploreSvg.vue'
import ActivitySvg from './Components/ActivitySvg.vue'
import ProfileSvg from './Components/ProfileSvg.vue'
import SaveSvg from './Components/SaveSvg.vue'
import SettingSvg from './Components/SettingSvg.vue'
import SwitchSvg from './Components/SwitchSvg.vue'

export default Vue.extend({
  name: "HeaderLayout",
  components:{
    MagnifireSvg,
    HomeSvg,
    DirectSvg,
    FileSvg,
    ExploreSvg,
    ActivitySvg,
    ProfileSvg,
    SaveSvg,
    SettingSvg,
    SwitchSvg
  }
});
</script>


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
              <explore-svg></explore-svg>
            </router-link>
            <router-link to="/accounts/activity" class="mr-3">
             <activity-svg></activity-svg>
            </router-link>
            <li class="mr-3">
              <div class="dropdown">
                <img type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false" src="@/assets/Images/Header/HoseinSedaqat.jpg" width="24px" height="24px" style="border-radius:50%;" alt="">
                  <div class="dropdown-menu dropdown-menu-right mt-3" aria-labelledby="dropdownMenuButton">
                    <router-link to="/" class="dropdown-item hlcp">
                      <div class="d-flex align-self-center align-items-center">
                        <profile-svg></profile-svg>
                      <span class="align-self-center">Profile</span>
                      </div>
                    </router-link>
                    <router-link to="/saved" class="dropdown-item">
                     <div class="d-flex align-self-center align-items-center">
                       <save-svg></save-svg>
                      <span>Saved</span>
                     </div>
                    </router-link>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex align-self-center align-items-center">
                        <setting-svg></setting-svg>
                      <span>Setting</span>
                      </div>
                      </a>
                    <a class="dropdown-item" href="#" style="border-bottom:2px solid #eee;">
                      <div class="d-flex align-self-center align-items-center">
                        <switch-svg></switch-svg>
                      <span>Switch Accounts</span>
                      </div>
                      </a>
                    <a class="dropdown-item" href="#">Log Out</a>
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

<style scoped>
@import url("./Header.css");
</style>
