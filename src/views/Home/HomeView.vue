<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
});
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <main class="d-flex col-md-12">
          <div class="col-md-8">
            <div class="card mt-4">
              <div class="card-body">
                <p>swiper story</p>
              </div>
            </div>
            <div class="card mt-4">
              <div class="card-body">
                <p>post</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 ho_ps">
            <p class="ho_ps">
              Write Porfile and Some Suggestion
            </p>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url("./Home.css");
</style>
