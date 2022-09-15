<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SavedView",
});
</script>

<template>
  <section id="saved">
    <div class="container">
      <h3 class="text-center mt-5 mb-3">Saved Posts</h3>
      <div class="row">
        <div class="col-md-4 my-2">
          <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="PostOne" class="img-fluid">
        </div>
        <div class="col-md-4 my-2">
          <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="PostTwo" class="img-fluid">
        </div>
        <div class="col-md-4 my-2">
          <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="PostThree" class="img-fluid">
        </div>
        <div class="col-md-4 my-2">
          <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="PostFour" class="img-fluid">
        </div>
        <div class="col-md-4 my-2">
          <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="PostFive" class="img-fluid">
        </div>
        <div class="col-md-4 my-2">
          <img src="@/assets/Images/Header/HoseinSedaqat.jpg" alt="PostSix" class="img-fluid">
        </div>
      </div>
    </div>
  </section>
</template>
