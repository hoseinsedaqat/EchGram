<script>
import axios from 'axios';

import { required } from 'vuelidate/lib/validators';

export default {
  name: "ReportProblemView",

  data() {
    return {
      problemData: "",
      showError: {
        problemData: false
      }
    };
  },
  validations:{
    problemData: {
      required
    }
  },
  methods: {
    sendProblem() {
      if(!this.$v.problemData.$invalid){
        axios.post(`https://www.actionforms.io/e/r/echgram`,{ reportBug: this.problemData }).finally(() => {
          this.$toast.success('Thank You for the Report Problem to us ❤✌');
          this.$router.push('/');
          this.problemData = "";
        })
      }else{
        this.showError.problemData = true;

        setTimeout(() => {
          this.showError.problemData = false;
        }, 2000);
      }
    },
  },
};
</script>


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
              v-model.trim="$v.problemData.$model"
              class="form-control"
              placeholder="please briefly write the problem"
            ></textarea>
            <div class="alert alert-danger mt-3" v-if="showError.problemData">Problem Data is Required.</div>
            <button class="btn btn-primary w-100 my-2" @click="sendProblem">Send</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
textarea {
  resize: none;
}
</style>
