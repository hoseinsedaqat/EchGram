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
import HomeSvgDark from './HomeSvgDark.vue';
import DirectSvgDark from './DirectSvgDark.vue';
import FileSvgDark from './FileSvgDark.vue';
import ExploreSvgDark from './ExploreSvgDark.vue';
import { headerDarker } from '../Utils/HeaderDark';

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
    HomeSvgDark,
    DirectSvgDark,
    FileSvgDark,
    ExploreSvgDark
  },
  mixins:[headerDarker],
  // now i think can change color of
  // watch: {
    
  // },
  // mounted() {
  //   this.homeNav = false;
  // },
});
</script>

<template>
  <ul class="d-flex align-items-end justify-content-around">
    <!-- Main Icons -->
    <router-link to="/" class="mr-3">
      <home-svg v-if="homeNav"></home-svg>
      <home-svg-dark v-if="!homeNav"></home-svg-dark>
    </router-link>
    <router-link to="/direct/inbox" class="mr-3">
      <direct-svg v-if="directNav"></direct-svg>
      <direct-svg-dark v-if="!directNav"></direct-svg-dark>
    </router-link>
    <router-link to="/create/post" class="mr-3">
      <file-svg v-if="postNav"></file-svg>
      <file-svg-dark v-if="!postNav"></file-svg-dark>
    </router-link>
    <router-link to="/explore" class="mr-3">
      <explore-svg  v-if="exploreNav"></explore-svg>
      <explore-svg-dark v-if="!exploreNav"></explore-svg-dark>
    </router-link>
    <router-link to="/accounts/activity" class="mr-3">
      <activity-svg v-if="activityNav"></activity-svg>
      <svg v-if="!activityNav" aria-label="Activity Feed" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
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
