<template>
  <svg
    @click="unSave()"
    aria-label="Remove"
    class="_ab6-"
    color="#262626"
    fill="#262626"
    height="24"
    role="img"
    viewBox="0 0 24 24"
    width="24"
  >
    <path
      d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"
    ></path>
  </svg>
</template>

<script>
import postData from "@/data/postData";
export default {
  name: "UnsaveSvg",
  props: ["post"],
  methods: {
    unSave() {
      let findPost = postData.find((post) => post.userName === this.post.userName);
      findPost.userSave = true;
      findPost.userUnsave = false;
    },
  },
};
</script>
