<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "ExploreLayout",
  components: { Loading },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
};
</script>

<template>
  <div class="container">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :is-full-page="true"
      :width="30"
      loader="dots"
      :opacity="0"
    ></loading>
    <section v-if="!isLoading">
      <div class="row my-4">
        <div class="col-md-5">
          <img
            src="@/assets/Images/Posts/Brad_Post.jpg"
            alt="HoseinExplore"
            class="img-fluid w-100 ex_ih ho_cp"
          />
          <img
            src="@/assets/Images/Posts/Evan_Post.jpg"
            alt="HoseinExplore"
            class="my-2 img-fluid w-100 ex_ih ho_cp"
          />
        </div>
        <div class="col-md-7 mt-emmited">
          <img
            src="@/assets/Images/Header/HotMe.jpg"
            alt="HoseinExplore"
            class="w-100 img-fluid ho_cp"
          />
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-4">
          <img
            src="@/assets/Images/Main/PostEight.jpg"
            alt="HoseinExplore"
            class="img-fluid w-100 mt-2 ho_cp"
          />
        </div>
        <div class="col-md-4">
          <img
            src="@/assets/Images/Main/PostSeven.jpg"
            alt="HoseinExplore"
            class="img-fluid w-100 mt-2 ho_cp"
          />
        </div>
        <div class="col-md-4">
          <img
            src="@/assets/Images/Posts/Max_Post.jpg"
            alt="HoseinExplore"
            class="img-fluid w-100 mt-2 mb-5 ho_cp"
          />
        </div>
      </div>
    </section>
  </div>
</template>
