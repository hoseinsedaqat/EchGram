<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProfilePostSingle",
});
</script>

<template>
  <section id="post-photo-single">
    <div class="container my-5" style="border: 1px solid #a1a1a0">
      <div class="row">
        <div class="col-md-8 py-2">
          <img
            class="mr-3"
            src="@/assets/Images/Header/HoseinSedaqat.jpg"
            alt="Hosein Sedaqat Post"
            width="650px"
            height="500px"
          />
        </div>
        <div class="col-md-4 bg-white p-3">
          <div class="ho_ch d-flex align-items-center justify-content-between mx-3">
            <span class="d-flex align-items-center">
              <img
                class="mr-4"
                src="@/assets/Images/Header/HoseinSedaqat.jpg"
                alt="Hosein Sedaqat Post"
                width="40px"
                style="border-radius: 50%"
              />
              <span class="ho_ffsc font-weight-bold">HoseinSedaqat</span>
            </span>
            <span class="ho_cp">
              <p>...</p>
            </span>
          </div>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos ex dolorum
            similique? Inventore est at aut sit ipsum, exercitationem rem!
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
