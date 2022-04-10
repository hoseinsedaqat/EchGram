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
    // now i think can change color of 
  watch:{
    $route (to, from){
        console.log(to.path);
    }
} 
});
</script>

<template>
  <ul class="d-flex align-items-end justify-content-around">
      <!-- Main Icons -->
    <router-link to="/" class="mr-3">
      <home-svg></home-svg>
    </router-link>
    <router-link to="/direct/inbox" class="mr-3">
      <direct-svg></direct-svg>
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
