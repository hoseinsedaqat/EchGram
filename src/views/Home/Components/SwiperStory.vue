<script lang="ts">
import Vue from 'vue'
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default Vue.extend({
    name:"SwiperStory",
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
})
</script>



<template>
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