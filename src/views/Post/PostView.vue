<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PostView",
  data(){
      return {
          img: "" as any
      }
  },
  methods:{
      onFileChange(e: any) {
      try{
        var reader = new FileReader();
        reader.onload = () => {

        this.img = reader.result;
      };
      
      reader.readAsDataURL(e.target.files[0]);
      }catch(e){
        console.log(e);
        alert('Image Size is Large')
      }
    },
  }
});
</script>

<template>
  <section id="postView">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card my-5">
            <div class="card-body text-center">
                <img :src="img" alt="Preview Image" v-if="img !== '' " style="border-radius:10px" width="300px" height="300px" class="mb-2">
              <form>
                <div class="form-group text-center">
                  <label for="Image" class="po_ic">
                      <svg aria-label="New Story" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="13.191" fill="none" r="4.539" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></circle><path d="M18.592 21.374A3.408 3.408 0 0022 17.966V8.874a3.41 3.41 0 00-3.41-3.409h-.52a2.108 2.108 0 01-1.954-1.375 2.082 2.082 0 00-2.204-1.348h-3.824A2.082 2.082 0 007.884 4.09 2.108 2.108 0 015.93 5.465h-.52A3.41 3.41 0 002 8.875v9.091a3.408 3.408 0 003.408 3.408z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </label>
                  <input type="file" name="Image" id="Image" @change="onFileChange($event)"/>
                </div>
                <div class="form-group">
                  <label for="Caption">Write Caption:</label>
                  <input type="text" name="Caption" id="Caption" class="form-control" />
                </div>
                <button class="btn btn-primary">Share</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
