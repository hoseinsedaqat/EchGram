<script lang="ts">
import Vue from "vue";

import profilePost from "@/data/profilePost";

import commentData from '@/data/commentData';

import { staticStyle } from '@/static/staticStyle';

export default Vue.extend({
  name: "ProfilePostSingle",
  data() {
    return {
      profilePost,
      commentData,
      // eslint-disable-next-line
      fetchPost: {} as any,
      likePost: false,
      unLikePost: true,
      staticStyle
    };
  },
  methods:{
    Like(){
      this.likePost = true;
      this.unLikePost = false;
    },
    Unlike(){
      this.likePost = false;
      this.unLikePost = true;    
    }
  },
  created(){
    let findPost = profilePost.find(post => post.id === this.$route.params.id);
    this.fetchPost = findPost
  }
});
</script>

<template>
  <section id="post-photo-single">
    <div class="container my-5">
      <div class="row no-gutters">
        <div class="col-md-8 profile-detail-photo">
          <img
            class="img-fluid"
            :src="fetchPost.postImg"
            alt="Hosein Sedaqat Post"
          />
        </div>
        <div class="col-md-4 bg-white p-3">
          <div class="ho_ch d-flex align-items-center justify-content-between mx-3">
            <span class="d-flex align-items-center">
              <img
                class="mr-4"
                src="@/assets/Images/User/Hosein_instagram_Picture.jpg"
                alt="Hosein Sedaqat Post"
                :width="staticStyle.width + 'px'"
                :style="{'border-radius': staticStyle.borderRadius + '%'}"
              />
              <span class="ho_ffsc font-weight-bold">HoseinSedaqat</span>
            </span>
            <span class="ho_cp">
              <p class="font-weight-bold">...</p>
            </span>
          </div>
          <p class="mt-2 mx-3" :style="{'font-size': staticStyle.fontSize + 'px'}">Namaste</p>
          <hr />
          <!-- Like Comment and Saved -->
          <div class="d-flex flex-column">
            <div
              class="m-2 d-flex align-items-center justify-content-between"
              v-for="(comment,idx) in commentData"
              :key="(comment, idx)"
            >
              <div>
                <span>
                  <img
                    :src="comment.imgUser"
                    alt="CoomentImage"
                    :width="staticStyle.width / 2 + 'px'"
                    :style="{'border-radius': staticStyle.borderRadius + '%'}"
                  />
                </span>
                <span class="ml-1 mt-1 font-weight-bold" :style="{'font-size': staticStyle.fontSize - 2 + 'px'}">
                  {{ comment.name }}
                </span>
                <span class="ml-1 mt-1" :style="{'font-size': staticStyle.fontSize - 3 + 'px'}">
                  {{ comment.comment }}
                </span>
              </div>
              <div>
                <i class="fa fa-heart ho_ffs text-secondary ho_cp"></i>
              </div>
            </div>
          </div>
          <hr />
          <div class="m-2 d-flex align-items-center justify-content-between">
            <!-- Like and Unlike -->
            <span>
              <svg
                v-if="unLikePost"
                @click="Like"
                aria-label="Like"
                class="_8-yf5 mr-2 ho_cp"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"
                ></path>
              </svg>
              <svg
                v-if="likePost"
                @click="Unlike"
                aria-label="Unlike"
                class="_ab6- mr-2 ho_cp"
                color="#ed4956"
                fill="#ed4956"
                height="24"
                role="img"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"
                ></path>
              </svg>
              <!-- Comment -->
              <svg
                aria-label="Comment"
                class="_8-yf5 mr-2 ho_cp"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></path>
              </svg>
              <svg
                aria-label="Share Post"
                class="_8-yf5 ho_cp"
                height="24"
                role="img"
                viewBox="0 0 24 24"
                width="24"
              >
                <line
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                  x1="22"
                  x2="9.218"
                  y1="3"
                  y2="10.083"
                ></line>
                <polygon
                  fill="none"
                  points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="2"
                ></polygon>
              </svg>
            </span>
            <span>
              <svg
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
            </span>
          </div>
          <!-- Liked by and title author -->
          <div class="mx-2 d-flex">
            <div>
              <span class="mr-1 mt-1 font-weight-bold ho_ffsc">
                Hosein and Misa and Lissa Liked Your Photo
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
