<script lang="ts">
import Vue from "vue";
import AccountEditList from "./Components/AccountEditList.vue";
import AccountEditProfiles from "./Components/AccountEditProfiles.vue";
export default Vue.extend({
  name: "AccountEditView",
  data() {
    return {
      mobileView: false,
    };
  },
  components: {
    AccountEditList,
    AccountEditProfiles,
  },
  mounted() {
    if (window.innerWidth < 678) {
      this.mobileView = true;
    }
  },
});
</script>

<template>
  <section id="account-edit">
    <account-edit-list v-if="mobileView"></account-edit-list>
    <account-edit-profiles v-if="mobileView"></account-edit-profiles>
    <div class="container">
      <div class="row mt-5 no-guuters">
        <account-edit-list v-if="!mobileView"></account-edit-list>
        <account-edit-profiles v-if="!mobileView"></account-edit-profiles>
      </div>
    </div>
  </section>
</template>
