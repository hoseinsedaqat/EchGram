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
  },
  methods: {
    test(){
      alert('New Comment!😃')
    }
  }
});
</script>

<template>
  <section id="HomeLayout">
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3">
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
                <div class="m-2 d-flex align-items-center justify-content-between">
                  <!-- Hi -->
                  <span>
                    <svg aria-label="Like" class="_8-yf5 mr-2 ho_cp"   height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                    <svg aria-label="Comment" class="_8-yf5 mr-2 ho_cp"  height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                    <svg aria-label="Share Post" class="_8-yf5 ho_cp"  height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                  </span>
                  <span>
                    <svg aria-label="Save" class="_8-yf5 ho_cp" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                  </span>
                </div>
                <div class="d-flex flex-column">
                  <small class="text-muted ml-2">View All Comments</small>
                  <div class="mx-2 d-flex align-items-center justify-content-between">
                    <div>
                      <span class="mr-2 mt-1">
                      HoseinSedaqat
                    </span>
                    <span class="ho_ffsc mt-1">
                              خیلی خوشگل شدی حسین جون 😃✌                      
                    </span>
                    </div>
                    <div>
                      <i class="fa fa-heart ho_ffs text-secondary ho_cp" ></i>
                    </div>
                  </div>
                   <div class="mx-2 my-1">
                      <small class="text-muted">3 Hours Ago</small>
                  </div>
                  <div style="border-top:1px solid #999999;" class="p-2">
                    <div class="mx-2">
                      <input type="text" placeholder="Add a commnet..." class="ho_bfc ho_iw">
                      <button class="text-primary ho_btnfc" @click="test()">Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
  background-color: #fff;
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
  background-color: #fff;
  padding: 0.4rem;
  border-radius: 50%;
}
</style>
