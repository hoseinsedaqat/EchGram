<script lang="ts">
import Vue from "vue";
import { headerDarker } from "../Utils/HeaderDark";

export default Vue.extend({
  name: "HeaderIcons",
  mixins: [headerDarker],
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
      <explore-svg v-if="exploreNav"></explore-svg>
      <explore-svg-dark v-if="!exploreNav"></explore-svg-dark>
    </router-link>
    <router-link to="/accounts/activity" class="mr-3">
      <!-- <activity-svg v-if="activityNav" id="dropdownMenu2" data-toggle="dropdown2" aria-expanded="false"></activity-svg> -->
      <activity-svg-dark v-if="!activityNav"></activity-svg-dark>
      <div class="dropdown">
    <activity-svg v-if="activityNav" id="dropdownMenu2" data-toggle="dropdown" aria-expanded="false"></activity-svg>
  <div id="shows" class="dropdown-menu dropdown-menu-right mt-3" aria-labelledby="dropdownMenu2">
    <button class="dropdown-item" type="button">Action</button>
    <button class="dropdown-item" type="button">Another action</button>
    <button class="dropdown-item" type="button">Something else here</button>
  </div>
</div>
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
