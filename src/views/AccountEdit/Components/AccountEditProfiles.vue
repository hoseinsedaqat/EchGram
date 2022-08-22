<template>
  <div class="col-md-9 bg-white py-3 abl">
    <div class="ars d-flex">
      <span>
        <img
          src="@/assets/Images/User/Hosein_instagram_Picture.jpg"
          alt=""
          width="50px"
          style="border-radius: 50%"
        />
      </span>
      <span class="d-flex flex-column mx-4">
        <span>HoseinSedaqat</span>
        <span class="text-primary">Change profile photo</span>
      </span>
    </div>
    <div class="ars">
      <label for="name" class="font-weight-bold">Name</label>
      <input type="text" name="" id="name" class="form-control" />
    </div>
    <div class="ars">
      <label for="username" class="font-weight-bold">Username</label>
      <input type="text" name="" id="username" class="form-control" />
    </div>
    <div class="ars">
      <label for="website" class="font-weight-bold">Website</label>
      <input type="text" name="" id="website" class="form-control" />
    </div>
    <div class="ars">
      <label for="bio" class="font-weight-bold">Bio</label>
      <textarea name="" id="" class="form-control"></textarea>
    </div>
    <div class="ars">
      <button class="btn btn-primary text-white">Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AccountEditProfiles",
});
</script>
