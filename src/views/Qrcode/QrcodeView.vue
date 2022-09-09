<script lang="ts">
import Vue from "vue";
import QrcodeVue from "qrcode.vue";
import ProfileFooter from '@/views/Profile/Components/ProfileFooter.vue'
export default Vue.extend({
  name: "QrcodeView",
  data() {
    return {
      value: "https://instagram.com/hoseinsedaqat",
      size: 150,
      color_1: true,
      color_2: false,
      color_3: false,
      color_4: false,
      color_5: false
    };
  },
  components: {
    QrcodeVue,
    ProfileFooter
  },
  methods: {
    colorOne(){
        this.color_1 = true
        this.color_2 = false
        this.color_3 = false
        this.color_4 = false
        this.color_5= false
    },
    colorTwo(){
        this.color_1 = false
        this.color_2 = true
        this.color_3 = false
        this.color_4 = false
        this.color_5 = false
    },
    colorThree(){
        this.color_1 = false
        this.color_2 = false
        this.color_3 = true
        this.color_4 = false
        this.color_5 = false
    },
    colorFour(){
        this.color_1 = false
        this.color_2 = false
        this.color_3 = false
        this.color_4 = true
        this.color_5 = false
    },
    colorFive(){
        this.color_1 = false
        this.color_2 = false
        this.color_3 = false
        this.color_4 = false
        this.color_5 = true
    },
  },
  mounted(){
    if(window.innerWidth < 678) {
        this.size = 80
    }
  }
});
</script>

<template>
  <div>
    <section :class="color_1 ? 'qrcode' : color_2 ? 'qrcode_2' : color_3 ? 'qrcode_3' : color_4 ? 'qrcode_4' : color_5 ? 'qrcode_5' : ''">
    <div class="container">
      <div class="row">
        <div class="col-md-4 my-5">
          <div class="card bg-white text-center p-5 card-qr">
            <qrcode-vue :value="value" :size="size" level="H" />
          </div>
        </div>
        <div class="col-md-8 my-5">
          <h4 class="text-white">QR code helps people follow you quickly</h4>
          <p class="text-white">
            People can scan your QR code with their smartphone’s camera to see your
            profile. Download and print your QR code, then stick it on your products,
            posters and more.
          </p>
          <div class="QR_pickUpColor">
            <p class="colorOne" @click="colorOne"></p>
            <p class="colorTwo" @click="colorTwo"></p>
            <p class="colorThree" @click="colorThree"></p>
            <p class="colorFour" @click="colorFour"></p>
            <p class="colorFive" @click="colorFive"></p>
          </div>    
        </div>
      </div>
    </div>
    </section>
    <!-- Footer -->
    <div class="container mt-5">
        <profile-footer></profile-footer>
    </div>
  </div>
</template>
