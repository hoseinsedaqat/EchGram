<script lang="ts">
import Vue from "vue";

import activitySmScreen from '@/data/activitySmScreen'

export default Vue.extend({
  name: "ActivityView",
  data(){
    return {
      activitySmScreen
    }
  }
});
</script>

<template>
  <section id="activity">
    <div class="container">
      <div class="row my-4">
        <div class="col-md-8 mx-auto">
          <!-- Top Requests -->
          <div class="d-flex align-items-center justify-content-between a_bb">
            <div class="d-flex align-items-center" style="font-size: 12px">
              <img
                src="@/assets/Images/Header/HoseinSedaqat.jpg"
                class="mr-2"
                alt=""
                width="40px"
                style="border-radius: 50%"
              />
              <span class="d-flex flex-column">
                <span class="text-dark font-weight-bold">Follow Requests</span>
                <span class="text-muted">Hosein and + 7 others</span>
              </span>
            </div>
            <i class="fas fa-angle-right text-primary"></i>
          </div>
          <!-- Activity -->
          <div class="d-flex align-items-center justify-content-between my-4" v-for="(user,idx) in activitySmScreen" :key="(user,idx)">
            <div class="d-flex align-items-center" style="font-size: 12px">
              <img
                :src="user.img"
                class="mr-2"
                alt=""
                width="40px"
                style="border-radius: 50%"
              />
              <span class="d-flex flex-row">
                <span class="text-dark font-weight-bold mr-1">{{ user.name }}</span>
                <span class="mr-1">Liked Your Photo</span>
                <span class="text-muted">{{ user.numberOfWeek }}w</span>
              </span>
            </div>
            <!-- Change each photo -->
            <img
                :src="user.userImageLiked"
                class="mr-2"
                alt=""
                width="40px"
                height="30px"
              />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
