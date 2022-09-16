<template>
  <svg
    @click="save()"
    aria-label="Save"
    class="_8-yf5 ho_cp"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <polygon
      fill="none"
      points="20 21 12 13.44 4 21 4 3 20 3 20 21"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
    ></polygon>
  </svg>
</template>

<script>
import postData from "@/data/postData";
import { mapActions } from 'vuex'
export default {
  name: "SaveSvg",
  props: ["post"],
  methods: {
    ...mapActions(['addSaved']),
    save() {
      let findPost = postData.find((post) => post.userName === this.post.userName);
      findPost.userSave = false;
      findPost.userUnsave = true;
      this.addSaved({ imgSave: findPost.userPost })
      this.$toast.success(`You Save ${findPost.userName} Post`);
    },
  },
};
</script>

<style></style>
