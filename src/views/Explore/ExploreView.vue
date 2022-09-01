<script lang="ts">
import Vue from "vue";

import ExploreLayout from "./Components/ExploreLayout.vue";

export default Vue.extend({
  components: { ExploreLayout },

  name: "ExploreView",
});
</script>

<template>
  <section id="exploreView">
    <explore-layout></explore-layout>
  </section>
</template>
