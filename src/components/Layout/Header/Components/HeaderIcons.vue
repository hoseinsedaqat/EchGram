<script lang="ts">
import Vue from "vue";
import HomeSvg from "./HomeSvg.vue";
import DirectSvg from "./DirectSvg.vue";
import FileSvg from "./FileSvg.vue";
import ExploreSvg from "./ExploreSvg.vue";
import ActivitySvg from "./ActivitySvg.vue";
import ProfileSvg from "./ProfileSvg.vue";
import SaveSvg from "./SaveSvg.vue";
import SettingSvg from "./SettingSvg.vue";
import SwitchSvg from "./SwitchSvg.vue";
import DropdownAngle from "./DropdownAngle.vue";

export default Vue.extend({
  name: "HeaderIcons",
  components: {
    HomeSvg,
    DirectSvg,
    FileSvg,
    ExploreSvg,
    ActivitySvg,
    ProfileSvg,
    SaveSvg,
    SettingSvg,
    SwitchSvg,
    DropdownAngle,
  },
  data(){
    return{
      homeNav:true,
      directNav:true
    }
  },
    // now i think can change color of 
  watch:{
    // eslint-disable-next-line
    $route (to, from){
        switch(to.path){
          case '/':
            this.homeNav = false;
            this.directNav = true
            break
          case '/direct/inbox':
            this.homeNav = true
            this.directNav = false
            break
        }
    }
},
mounted(){
  this.homeNav = false
} 
});
</script>

<template>
  <ul class="d-flex align-items-end justify-content-around">
      <!-- Main Icons -->
    <router-link to="/" class="mr-3">
      <home-svg v-if="homeNav"></home-svg>
      <svg v-if="!homeNav" aria-label="Home" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22 23h-6.001a1 1 0 01-1-1v-5.455a2.997 2.997 0 10-5.993 0V22a1 1 0 01-1 1H2a1 1 0 01-1-1V11.543a1.002 1.002 0 01.31-.724l10-9.543a1.001 1.001 0 011.38 0l10 9.543a1.002 1.002 0 01.31.724V22a1 1 0 01-1 1z"></path></svg>
    </router-link>
    <router-link to="/direct/inbox" class="mr-3">
      <direct-svg v-if="directNav"></direct-svg>
      <svg v-if="!directNav" aria-label="Direct" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M22.91 2.388a.69.69 0 00-.597-.347l-20.625.002a.687.687 0 00-.482 1.178L7.26 9.16a.686.686 0 00.778.128l7.612-3.657a.723.723 0 01.937.248.688.688 0 01-.225.932l-7.144 4.52a.69.69 0 00-.3.743l2.102 8.692a.687.687 0 00.566.518.655.655 0 00.103.008.686.686 0 00.59-.337L22.903 3.08a.688.688 0 00.007-.692" fill-rule="evenodd"></path></svg>
    </router-link>
    <router-link to="/create/post" class="mr-3">
      <file-svg></file-svg>
    </router-link>
    <router-link to="/explore" class="mr-3">
      <explore-svg></explore-svg>
    </router-link>
    <router-link to="/accounts/activity" class="mr-3">
      <activity-svg></activity-svg>
    </router-link>
    <li class="mr-3">
        <!-- Icons User Profile -->
      <div class="dropdown">
        <img
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-expanded="false"
          src="@/assets/Images/Header/HoseinSedaqat.jpg"
          width="24px"
          height="24px"
          style="border-radius: 50%"
          alt="Hosein Sedaqat"
        />
        <div
          class="dropdown-menu dropdown-menu-right mt-3"
          aria-labelledby="dropdownMenuButton"
        >
          <dropdown-angle></dropdown-angle>
          <router-link to="/" class="dropdown-item h_lcp">
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
          <router-link to="/" class="dropdown-item">
            <div class="d-flex align-self-center align-items-center">
              <setting-svg></setting-svg>
              <span>Setting</span>
            </div>
          </router-link>
          <router-link to="/" class="dropdown-item" style="border-bottom: 2px solid #eee">
            <div class="d-flex align-self-center align-items-center">
              <switch-svg></switch-svg>
              <span>Switch Accounts</span>
            </div>
          </router-link>
          <router-link to="/" class="dropdown-item">Log Out</router-link>
        </div>
      </div>
    </li>
  </ul>
</template>
