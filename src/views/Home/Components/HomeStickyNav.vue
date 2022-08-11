<script lang="ts">
import suggestionData from "@/data/suggestionData";
export default {
  name: "HomeStickyNav",
  data() {
    return {
      suggestionData,
    };
  },
};
</script>

<template>
  <div class="ho_ps">
    <!-- Suggestion and Profile some data -->
    <div class="d-flex flex-row align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img
          src="@/assets/Images/User/Hosein_instagram_Picture.jpg"
          alt="HoseinSedaqatMain"
          class="border border-secondary mr-4"
          width="60px"
          style="border-radius: 50%"
        />
        <span class="d-flex flex-column ho_pdfz">
          <router-link to="/">HoseinSedaqat</router-link>
          <span class="text-muted">Hosein Sedaqat</span>
        </span>
      </div>
      <a href="#" class="ho_pdfz font-weight-bold">Switch</a>
    </div>
    <!-- Suggestion Header -->
    <div class="mt-3 d-flex flex-row justify-content-between">
      <p class="ho_pdfz text-muted">Suggestions For You</p>
      <a href="#" class="ho_pdfz font-weight-bold">See All</a>
    </div>
    <!-- You Should Follows -->
    <div
      class="d-flex flex-row align-items-center justify-content-between mb-2"
      v-for="suggestion in suggestionData"
      :key="suggestion"
    >
      <div class="d-flex align-items-center">
        <img
          :src="suggestion.suggestionImg"
          alt="HoseinSedaqatMain"
          class="border border-secondary mr-4"
          width="35px"
          style="border-radius: 50%"
        />
        <span class="d-flex flex-column ho_pdfz">
          <span>{{ suggestion.suggestionName }}</span>
          <span class="text-muted">{{ suggestion.suggestionFollow }}</span>
        </span>
      </div>
      <a href="#" class="ho_pdfz font-weight-bold">Follow</a>
    </div>

    <!-- Footer -->
    <div class="mt-4">
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
      <p class="ho_ffsc mx-1 mt-2">&copy; 2022 INSTAGRAM Design By Hosein Sedaqat</p>
    </div>
  </div>
</template>
