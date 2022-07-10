<template>
  <ul class="d-flex align-items-end justify-content-around" id="mobile-sticky-bottom">
    <!-- Main Icons -->
    <router-link to="/" class="mr-3">
      <home-svg v-if="homeNav"></home-svg>
      <home-svg-dark v-if="!homeNav"></home-svg-dark>
    </router-link>
    <!-- <router-link to="/direct/inbox" class="mr-3">
      <direct-svg v-if="directNav"></direct-svg>
      <direct-svg-dark v-if="!directNav"></direct-svg-dark>
    </router-link> -->
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
      <div @click="navTrigger()" id="ownDropDown">
        <activity-svg v-if="activityNav"></activity-svg>
        <div v-if="forActivity" id="ownDropDownContent">
          <div class="d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center" style="font-size:12px;">
              <img src="@/assets/Images/Header/HoseinSedaqat.jpg" class="mr-2" alt="" width="40px" style="border-radius:50%;">
              <span class="d-flex flex-column">
                 <span class="text-dark">Follow Requests</span>
              <span>Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
          <hr>
          <div class="my-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center" style="font-size:12px;">
              <img src="@/assets/Images/Header/HoseinSedaqat.jpg" class="mr-2" alt="" width="40px" style="border-radius:50%;">
              <span class="d-flex flex-column">
                 <span class="text-dark">Follow Requests</span>
              <span>Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
          <div class="my-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center" style="font-size:12px;">
              <img src="@/assets/Images/Header/HoseinSedaqat.jpg" class="mr-2" alt="" width="40px" style="border-radius:50%;">
              <span class="d-flex flex-column">
                 <span class="text-dark">Follow Requests</span>
              <span>Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
          <div class="my-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center" style="font-size:12px;">
              <img src="@/assets/Images/Header/HoseinSedaqat.jpg" class="mr-2" alt="" width="40px" style="border-radius:50%;">
              <span class="d-flex flex-column">
                 <span class="text-dark">Follow Requests</span>
              <span>Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
          <div class="my-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center" style="font-size:12px;">
              <img src="@/assets/Images/Header/HoseinSedaqat.jpg" class="mr-2" alt="" width="40px" style="border-radius:50%;">
              <span class="d-flex flex-column">
                 <span class="text-dark">Follow Requests</span>
              <span>Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
          <div class="my-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center" style="font-size:12px;">
              <img src="@/assets/Images/Header/HoseinSedaqat.jpg" class="mr-2" alt="" width="40px" style="border-radius:50%;">
              <span class="d-flex flex-column">
                 <span class="text-dark">Follow Requests</span>
              <span>Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right"></i>
          </div>
        </div>
      </div>
    </router-link>
    <router-link class="mr-3" to="/hoseinsedaqat">
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
      </div>
    </router-link>
  </ul>
</template>

<script>
import { headerDarker } from "../Utils/HeaderDark";
export default {
    name:'MobileSticky',
    mixins: [headerDarker],
}
</script>