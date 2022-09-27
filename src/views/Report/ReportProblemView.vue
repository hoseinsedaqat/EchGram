<template>
  <section id="report-a-problem">
    <div class="container">
      <h3 class="text-center mt-5">Report a Porblem</h3>
      <div class="row mt-5">
        <div class="col-md-6 mx-auto">
          <div class="card p-3">
            <textarea
              name="problem"
              id="problem"
              cols="30"
              rows="10"
              v-model="problemData"
              class="form-control"
              placeholder="please briefly write the problem"
            ></textarea>
            <button class="btn btn-primary w-100 my-2" @click="sendProblem">Send</button>
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
  methods: {
    sendProblem() {
      if(this.problemData.trim() !== ""){
        console.log(this.problemData);
        alert('we work on this features')
      }else{
        this.$toast.error('Please Write the Problem ✌😀');
      }
    },
  },
});
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
