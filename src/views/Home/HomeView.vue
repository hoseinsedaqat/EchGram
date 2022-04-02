<script lang="ts">
import Vue from "vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default Vue.extend({
  name: "HomeView",
  data() {
    return {
      swiperOption: {
        slidesPerView: 7,
        spaceBetween: 2,
        loop: false,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  }
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-md-8 mt-3">
            <div class="card mt-4">
              <!-- Swiper Story -->
              <div>
                <swiper class="swiper" :options="swiperOption">
                  <swiper-slide>
                    <router-link to="/test">
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                    </router-link>
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <swiper-slide>
                    <img class="ho_cp ho_bcs" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="" width="65px" style="border-radius:50%;">
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                </swiper>
              </div>
            </div>
            <!-- Post Section -->
            <div class="card my-4">
              <div class="py-2">
                <!-- Header -->
                <div class="ho_ch d-flex align-items-center justify-content-between mx-3">
                  <span class="d-flex align-items-center">
                    <img class="mr-3" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="Hosein Sedaqat Post" width="40px" style="border-radius:50%;">
                    <span class="ho_ffsc font-weight-bold">HoseinSedaqat</span>
                  </span>
                  <span class="ho_cp">
                    <p>...</p>
                  </span>
                </div>
                <!-- Post -->
                <div class="mt-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="Post" width="100%" height="100%">
                </div>
                <!-- Like Comment and Saved -->
                <div>
                  Hi
                </div>
              </div>
            </div>
          </div>
          <!-- After Change Class Just Content Shuold Use Sticky Nav -->
          <div class="col-md-4 ho_ps">
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

<style scoped>
.swiper {
  height: 100px;
  width: 100%;
}
.swiper-wrapper {
  width: 100% !important;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  background-color: #fff;
  border-radius: 10px;
}
.swiper-button-next {
  left: 1;
  top: 35px;
  padding: 2.5rem 0.2rem;
  color: #333;
  transition: all 0.4s ease;
}
.swiper-button-next:hover {
  transform: translate(-2px);
}
.swiper-button-next::after {
  font-size: 10px;
  background-color: #e9e9e9;
  padding: 0.4rem;
  border-radius: 50%;
}
.swiper-button-prev {
  right: 1;
  top: 35px;
  padding: 2.5rem 0.2rem;
  color: #333;
  transition: all 0.4s ease;
}
.swiper-button-prev:hover {
  transform: translate(2px);
}
.swiper-button-prev::after {
  font-size: 10px;
  background-color: #e9e9e9;
  padding: 0.4rem;
  border-radius: 50%;
}
</style>
