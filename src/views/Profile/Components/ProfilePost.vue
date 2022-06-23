<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ProfilePost",
});
</script>

<template>
  <div class="row mt-5">
    <div class="col-md-4">
      <router-link to="/p/test">
        <div class="img-post-overlay my-3">
          <img
            src="@/assets/Images/Main/PostOne.jpg"
            alt="PostOne"
            class="p-image-post"
          />
          <div class="overlay">
            <div class="text-overlay"><i class="fa fa-heart"></i> 52</div>
          </div>
        </div>
      </router-link>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img src="@/assets/Images/Main/PostTwo.jpg" alt="PostTwo" class="p-image-post" />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 26</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img
          src="@/assets/Images/Main/PostThree.jpg"
          alt="PostThree"
          class="p-image-post"
        />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 48</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img
          src="@/assets/Images/Main/PostFour.jpg"
          alt="PostFour"
          class="p-image-post"
        />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 78</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img
          src="@/assets/Images/Main/PostFive.jpg"
          alt="PostFive"
          class="p-image-post"
        />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 2000</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img src="@/assets/Images/Main/PostSix.jpg" alt="PostSix" class="p-image-post" />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 364</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img
          src="@/assets/Images/Main/PostSeven.jpg"
          alt="PostSeven"
          class="p-image-post"
        />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 7854</div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="img-post-overlay my-3">
        <img
          src="@/assets/Images/Main/PostEight.jpg"
          alt="PostEight"
          class="p-image-post"
        />
        <div class="overlay">
          <div class="text-overlay"><i class="fa fa-heart"></i> 9000</div>
        </div>
      </div>
    </div>
  </div>
</template>
