<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ActivityView",
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
          <div class="d-flex align-items-center justify-content-between my-4" v-for="x in 10" :key="x">
            <div class="d-flex align-items-center" style="font-size: 12px">
              <img
                src="@/assets/Images/Header/HoseinSedaqat.jpg"
                class="mr-2"
                alt=""
                width="40px"
                style="border-radius: 50%"
              />
              <span class="d-flex flex-row">
                <span class="text-dark font-weight-bold mr-1">HoseinSedaqat</span>
                <span class="mr-1">Liked Your Photo</span>
                <span class="text-muted">2w</span>
              </span>
            </div>
            <img
                src="@/assets/Images/Header/HoseinSedaqat.jpg"
                class="mr-2"
                alt=""
                width="40px"
              />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
