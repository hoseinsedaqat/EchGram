<script lang="ts">
import Vue from "vue";

import profilePost from '@/data/profilePost';

import { v4 as uuidv4 } from 'uuid';

export default Vue.extend({
  name: "PostView",
  data(){
      return {
        // eslint-disable-next-line
        img: "" as any,
        profilePost,
        caption: ""
      }
  },
  methods:{
      // eslint-disable-next-line
      onFileChange(e: any) {
      try{
        var reader = new FileReader();
        reader.onload = () => {

        this.img = reader.result;
      };
      
      reader.readAsDataURL(e.target.files[0]);
      }catch(e){
        console.log(e);
        alert('Image Size is Large');
      }
    },
    addPost(){
      if(this.img !== '' && this.caption !== '') {
        this.profilePost.unshift({id: uuidv4(), postImg: this.img ,like: 1,title: this.caption})
        this.$router.push('/hoseinsedaqat')
        this.$toast.success('Post is Uploaded')
      }else{
        this.$toast.error(`Don't Miss Upload a Image and fill Caption ✌😀`)
      }
    }
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
                <img :src="img" alt="Preview Image" v-if="img !== '' " style="border:1px solid #e9e9e9;border-radius:3px" width="210px" height="200px" class="mb-2">
              <form>
                <div class="form-group text-center">
                  <label for="Image" class="po_ic">
                      <svg aria-label="New Story" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="13.191" fill="none" r="4.539" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></circle><path d="M18.592 21.374A3.408 3.408 0 0022 17.966V8.874a3.41 3.41 0 00-3.41-3.409h-.52a2.108 2.108 0 01-1.954-1.375 2.082 2.082 0 00-2.204-1.348h-3.824A2.082 2.082 0 007.884 4.09 2.108 2.108 0 015.93 5.465h-.52A3.41 3.41 0 002 8.875v9.091a3.408 3.408 0 003.408 3.408z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
                  </label>
                  <input type="file" name="Image" id="Image" @change="onFileChange($event)"/>
                </div>
                <div class="form-group">
                  <label for="Caption">Write Caption:</label>
                  <input type="text" name="Caption" id="Caption" class="form-control" v-model="caption"/>
                </div>
                <button class="btn btn-primary w-100" @click.prevent="addPost">Share</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
