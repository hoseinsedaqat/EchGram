<template>
  <div class="mobile-headers">
    <div>
      <router-link to="/create/post">
        <svg
          aria-label="New Story"
          class="_8-yf5"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <circle
            cx="12"
            cy="13.191"
            fill="none"
            r="4.539"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          ></circle>
          <path
            d="M18.592 21.374A3.408 3.408 0 0022 17.966V8.874a3.41 3.41 0 00-3.41-3.409h-.52a2.108 2.108 0 01-1.954-1.375 2.082 2.082 0 00-2.204-1.348h-3.824A2.082 2.082 0 007.884 4.09 2.108 2.108 0 015.93 5.465h-.52A3.41 3.41 0 002 8.875v9.091a3.408 3.408 0 003.408 3.408z"
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
          ></path>
        </svg>
      </router-link>
    </div>
    <div>
      <img src="@/assets/Images/Header/735145cfe0a4.png" alt="" />
    </div>
    <div>
      <router-link to="/direct/inbox">
        <direct-svg></direct-svg>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DirectSvg from "./DirectSvg.vue";
export default Vue.extend({
  name: "MobileHeader",
  components: {
    DirectSvg,
  },
});
</script>
