<template>
    <div>
        <HeaderLayout/>
        <router-view/>
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderLayout from '@/components/Layout/Header/HeaderLayout.vue'
export default Vue.extend({
    name:"App",
    components:{
        HeaderLayout
    },
    mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    (this as any).$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    (this as any).$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to:any, from:any, next:any) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        // let meta = to.meta.progress
        // parse meta tags
        (this as any).$Progress.parseMeta(to.meta.progress)
      }
      //  start the progress bar
      (this as any).$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to:any, from:any) => {
      //  finish the progress bar
      (this as any).$Progress.finish()
    })
  }
})
</script>

<style>

</style>