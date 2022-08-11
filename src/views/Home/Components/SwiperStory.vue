<script lang="ts">
import Vue from "vue";

import { Swiper, SwiperSlide } from "vue-awesome-swiper";

import "swiper/css/swiper.css";

import swiperOption from "@/constant/SwiperOption";

export default Vue.extend({
  name: "SwiperStory",

  data() {
    return {
      swiperOption,
      swiperSwitch: false,
    };
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  methods: {
    checkWidth() {
      if (window.innerWidth < 678) {
        this.swiperSwitch = true;
      }
    },
  },

  mounted() {
    this.checkWidth();
  },
});
</script>

<template>
  <div class="card" :class="swiperSwitch ? '' : 'mt-4'">
    <!-- Swiper Story -->
    <div>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <img
            v-img:Hosein
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Hosein_instagram_Picture.jpg"
            width="65px"
            style="border-radius: 50%"
          />
          <img
            v-img:Hosein
            class="ho_cp ho_bcs d-none"
            src="@/assets/Images/Main/PostEight.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Zoheir
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Zoheir_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Bahador
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Bahador_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:MohammdReza
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/MohammadReza_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Nima
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Nima_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Pouya
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Pouya_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Jadi
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Jadi_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Farzad
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Farzad_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            v-img:Avicii
            class="ho_cp ho_bcs"
            src="@/assets/Images/User/Avicii_instagram_Picture.jpg"
            alt=""
            width="65px"
            style="border-radius: 50%"
          />
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<style scoped>
/* Swiper Style Just Work in Scoped Style 😎 */
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
.swiper-button-next::after {
  font-size: 9px;
  font-weight: 500;
  background-color: #fff;
  padding: 0.4rem 0.5rem;
  width: 21px;
  height: 21px;
  border-radius: 50%;
}
.swiper-button-prev {
  right: 1;
  top: 35px;
  padding: 2.5rem 0.2rem;
  color: #333;
  transition: all 0.4s ease;
}
.swiper-button-prev::after {
  font-size: 9px;
  font-weight: 500;
  background-color: #fff;
  padding: 0.4rem 0.5rem;
  width: 21px;
  height: 21px;
  border-radius: 50%;
}
</style>
