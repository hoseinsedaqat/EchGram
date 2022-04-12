import Vue from 'vue'
import { mapState } from 'vuex'

export const headerDarker = Vue.extend({
    data() {
        return {
          homeNav: true,
          directNav: true,
          postNav:true,
          exploreNav:true,
          activityNav:true
        };
    },
    computed:{
      ...mapState(['hosein'])
    },
    watch:{
    // eslint-disable-next-line
    $route(to:any, from:any) {
        switch (to.path) {
          case "/":
            this.homeNav = false
            this.directNav = true
            this.postNav = true
            this.exploreNav = true
            this.activityNav = true
            break;
          case "/direct/inbox":
            this.homeNav = true
            this.directNav = false
            this.postNav = true
            this.exploreNav = true
            this.activityNav = true
            break;
          case "/create/post":
            this.homeNav = true
            this.directNav = true
            this.postNav = false
            this.exploreNav = true
            this.activityNav = true
            break
          case "/explore":
            this.homeNav = true
            this.directNav = true
            this.postNav = true
            this.exploreNav = false
            this.activityNav = true
            break
          case "/accounts/activity":
            this.homeNav = true
            this.directNav = true
            this.postNav = true
            this.exploreNav = true
            this.activityNav = false
            break
        }
      },
    },
    mounted() {
        this.homeNav = false;
        // Test Vuex
        console.log(this.hosein);
    },
})