<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-md-8">
            <div class="card mt-4">
              <div class="card-body">
                <p>swiper story</p>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <p>post</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ho_ps">
            <div class="ho_ps">
              <!-- Suggestion and Profile some data -->
              <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="../../assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="60px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <router-link to="/">HoseinSedaqat</router-link>
                  <span class="text-muted">Hosein Sedaqat</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Switch</a>
              </div>
              <!-- Suggestion Header -->
              <div class="mt-4 d-flex flex-row justify-content-between">
                <p class="ho_pdfz text-muted">
                  Suggestions For You
                </p>
                <a href="#" class="ho_pdfz font-weight-bold">See All</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("./Home.css");
</style>
