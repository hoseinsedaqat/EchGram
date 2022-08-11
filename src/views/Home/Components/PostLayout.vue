<script lang="ts">
import Vue from "vue";

import { mapActions, mapGetters } from "vuex";

import PostModal from "./PostModal.vue";

import postData from "@/data/postData";

import CommentSvg from "./svg/CommentSvg.vue";

import ShareSvg from "./svg/ShareSvg.vue";

import SaveSvg from "./svg/SaveSvg.vue";

import UnlikeSvg from "./svg/UnlikeSvg.vue";

import LikeSvg from "./svg/LikeSvg.vue";

export default Vue.extend({
  name: "PostLayout",

  data() {
    return {
      postData,
    };
  },

  components: {
    PostModal,
    CommentSvg,
    ShareSvg,
    SaveSvg,
    UnlikeSvg,
    LikeSvg,
  },

  methods: {
    test() {
      alert("New Comment!😃");
    },
    ...mapActions(["showModal"]),
  },

  computed: {
    subStringText() {
      let text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempora accusamus nobis id consequatur. Eius sint accusantium, nemo voluptas dicta tempora, sed explicabo doloremque laborum ducimus mollitia fugit adipisci labore";

      let result = text.slice(0, 20) + " ...";
      return result;
    },
    ...mapGetters(["show_hide_modal"]),
  },
});
</script>

<template>
  <!-- Post Section -->
  <section id="postLayout">
    <div class="card my-4" v-for="(post, idx) in postData" :key="(post, idx)">
      <div class="py-2">
        <!-- Header -->
        <div class="ho_ch d-flex align-items-center justify-content-between mx-3">
          <span class="d-flex align-items-center">
            <img
              class="mr-3"
              :src="post.userImage"
              alt="Hosein Sedaqat Post"
              width="40px"
              style="border-radius: 50%"
            />
            <span class="ho_ffsc font-weight-bold">{{ post.userName }}</span>
          </span>
          <span class="ho_cp">
            <p
              @click="showModal()"
              type="button"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              ...
            </p>
          </span>
        </div>
        <!-- Post -->
        <div class="mt-2">
          <img :src="post.userPost" alt="Post" width="100%" height="100%" />
        </div>
        <!-- Like Comment and Saved -->
        <div class="m-2 d-flex align-items-center justify-content-between">
          <!-- Hi -->
          <span>
            <!-- This Place -->
            <unlike-svg v-if="post.userUnlike" :post="post"></unlike-svg>
            <like-svg v-if="post.userLike" :post="post"></like-svg>
            <comment-svg></comment-svg>
            <share-svg></share-svg>
          </span>
          <span>
            <save-svg></save-svg>
          </span>
        </div>
        <!-- Liked by and title author -->
        <div class="mx-2 d-flex">
          <div>
            <span class="mr-1 mt-1 font-weight-bold ho_ffsc"> 78 Likes </span>
          </div>
        </div>
        <div class="mx-2 d-flex">
          <div>
            <span class="mr-1 mt-1 font-weight-bold ho_ffsc"> {{ post.userName }} </span>
            <span class="mt-1 ho_ffs">
              {{ subStringText }}
            </span>
          </div>
        </div>
        <div class="d-flex flex-column">
          <small class="text-muted ml-2">View All Comments</small>
          <div class="mx-2 d-flex align-items-center justify-content-between">
            <div>
              <span class="mr-1 mt-1 font-weight-bold ho_ffsc"> RandomGuy_3256 </span>
              <span class="mt-1 ho_ffs"> You Look Beautiful Hosein </span>
            </div>
            <div>
              <i class="fa fa-heart ho_ffs text-secondary ho_cp"></i>
            </div>
          </div>
          <div class="mx-2">
            <small class="text-muted">3 Hours Ago</small>
          </div>
          <div style="border-top: 1px solid #999999" class="p-2 mt-3">
            <div class="mx-2">
              <input type="text" placeholder="Add a commnet..." class="ho_bfc ho_iw" />
              <button class="text-primary ho_btnfc ho_bw" @click="test()">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <post-modal v-show="show_hide_modal"></post-modal>
  </section>
</template>
