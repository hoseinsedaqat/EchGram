<template>
  <section id="report-a-problem">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 mx-auto">
          <div class="card p-3">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-control"
              placeholder="please briefly write the problem"
            ></textarea>
            <button class="btn btn-primary w-100 my-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ReportProblemView",
  data() {
    return {
      problemData: "",
    };
  },
});
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
