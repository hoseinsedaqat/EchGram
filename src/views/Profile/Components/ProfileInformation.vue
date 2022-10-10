<script lang="ts">
import Vue from "vue";

import SettingModal from "./SettingModal.vue";

import { mapActions, mapGetters } from "vuex";

import profilePost from '@/data/profilePost'

export default Vue.extend({
  name: "ProfileInformation",
  data(){
    return {
      profilePost
    }
  },
  components: {
    SettingModal,
  },
  methods: {
    ...mapActions(["showModal"]),
  },
  computed: {
    ...mapGetters(["show_hide_modal"]),
  },
});
</script>

<template>
  <div class="col-md-6 p-profile-information mt-5 px-5">
    <!-- First Row -->
    <div class="p-edit-part">
      <div>
        <p class="h4 m-0 p-0">HoseinSedaqat</p>
      </div>
      <div class="p-informarion-sm-block">
        <div>
        <router-link to="/accounts/edit">
          <button class="p-edit-profile">Edit profile</button>
        </router-link>
      </div>
      <div>
        <svg
          @click="showModal()"
          type="button"
          data-toggle="modal"
          data-target="#exampleModal"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          class="bi bi-gear-wide"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"
          />
        </svg>
      </div>
      </div>
    </div>
    <!-- Second Row -->
    <div class="p-edit-part-2">
      <div>
        <p class="m-0 p-0">{{ profilePost.length }} posts</p>
      </div>
      <div>
        <p class="m-0 p-0">181 followers</p>
      </div>
      <div>
        <p class="m-0 p-0">177 following</p>
      </div>
    </div>
    <!-- Third Row -->
    <div class="p-edit-part-3">
      <div>
        <p class="m-0 p-0 font-weight-bold">Hosein Sedaqat</p>
      </div>
    </div>
    <!-- Fourth Row -->
    <div class="p-edit-part-4">
      <div>
        <p class="m-0 p-0">📍 Bnd</p>
      </div>
    </div>

    <!-- Setting Modal Cause v-show render element in document but v-if is not please check profile.css-->
    <setting-modal v-show="show_hide_modal" class="profile-setting-modal"></setting-modal>
  </div>
</template>
