<script lang="ts">
import Vue from "vue";
import SwiperStory from "./Components/SwiperStory.vue";
import PostLayout from './Components/PostLayout.vue'
export default Vue.extend({
  components: { 
    SwiperStory,
    PostLayout 
    },
  name: "HomeView",
});
</script>

<template>
  <section id="HomeLayout">
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
            <swiper-story></swiper-story>
            <post-layout></post-layout>
          </div>
          <!-- After Change Class Just Content Shuold Use Sticky Nav -->
          <div class="col-lg-4 col-md-4 ho_ps">
            <div class="ho_ps">
              <!-- Suggestion and Profile some data -->
              <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="60px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <router-link to="/">HoseinSedaqat</router-link>
                  <span class="text-muted">Hosein Sedaqat</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Switch</a>
              </div>
              <!-- Suggestion Header -->
              <div class="mt-3 d-flex flex-row justify-content-between">
                <p class="ho_pdfz text-muted">
                  Suggestions For You
                </p>
                <a href="#" class="ho_pdfz font-weight-bold">See All</a>
              </div>
              <!-- You Should Follows -->
              <div class="d-flex flex-row align-items-center justify-content-between">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between mt-3">
                <div class="d-flex align-items-center">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinSedaqatMain" class="border border-secondary mr-4" width="35px" style="border-radius:50%;">
                <span class="d-flex flex-column ho_pdfz">
                  <span>Hosein Sedaqat</span>
                  <span class="text-muted">Followed by Zoheir</span>
                </span>
                </div>
                <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
              </div>
              <!-- Footer -->
              <div class="mt-4 ">
                <span class="ho_ffs text-muted mx-1 ho_cp">About </span> 
                <span class="ho_ffs text-muted mx-1 ho_cp">Help </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Press </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">API </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Jobs </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Privacy </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Terms </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Locations </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Top Accounts </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Hashtags </span>
                <span class="ho_ffs text-muted mx-1 ho_cp">Languages</span>
                <p class="ho_ffsc mx-1 mt-2">&copy;  2022 INSTAGRAM Design By Hosein Sedaqat</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>


