<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "DirectView",
  data(){
    return {
      noneDirect: true,
      directOne: false
    }
  },
  methods: {
    directUserOne(){
      this.noneDirect = false;
      this.directOne = true
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="row my-3 bg-white no-gutters">
        <!-- Define my Id -->
        <div class="col-md-4 d_hvh w-100 h-100">
          <div class="d_bp d-flex flex-align-center justify-content-around p-3">
            <div></div>
            <div>
              HoseinSedaqat
              <i class="fa fa-angle-down"></i>
            </div>
            <div>
              <svg aria-label="New Message" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.202 3.203H5.25a3 3 0 00-3 3V18.75a3 3 0 003 3h12.547a3 3 0 003-3v-6.952" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><path d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 012.004 0l1.224 1.225a1.417 1.417 0 010 2.004z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="16.848" x2="20.076" y1="3.924" y2="7.153"></line></svg>
            </div>
          </div>
          <div class="d_bp d_of">
            <div class="d-flex py-3 d_ph" @click="directUserOne">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span class="font-weight-bold">Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
            <div class="d-flex py-3 d_ph">
                <span class="mx-2">
                  <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="DirectHosein" width="50px" style="border-radius:50%;">
                </span>
                <span class="d-flex flex-column mx-2">
                  <span>Hosein</span>
                  <span class="text-muted">Liked a message . 1d</span>
                </span>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="d_bp w-100 h-100 text-center">
            <!-- When We are have no Direct Select -->
            <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100" v-if="noneDirect">
            <h3 class="d_echl">Echgram</h3>
            <p class="h5">Your Messages</p>
            <span class="text-muted">
              Send private photos and messages to a friend or group.
            </span>
            <button class="btn btn-primary w-50 my-3">Send Message</button>
            </div>
            <!-- When We are have Direct -->
            <div v-if="directOne" class="w-100 d_bp">
              <!-- Direct Msg Header -->
              <div class="d-flex align-items-center justify-content-between d_mfhm mx-5">
                <span>
                  <img class="mr-3" src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="HoseinMessage"  width="30px" style="border-radius:50%;">
                  <small class="font-weight-bold">Hosein</small>
                </span>
                <span>
                  <svg aria-label="View Thread Details" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><circle cx="11.819" cy="7.709" r="1.25"></circle><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="10.569" x2="13.432" y1="16.777" y2="16.777"></line><polyline fill="none" points="10.569 11.05 12 11.05 12 16.777" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polyline></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
