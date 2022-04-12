import Vue from 'vue'
import HomeSvg from "../Components/HomeSvg.vue";
import DirectSvg from "../Components/DirectSvg.vue";
import FileSvg from "../Components/FileSvg.vue";
import ExploreSvg from "../Components/ExploreSvg.vue";
import ActivitySvg from "../Components/ActivitySvg.vue";
import ProfileSvg from "../Components/ProfileSvg.vue";
import SaveSvg from "../Components/SaveSvg.vue";
import SettingSvg from "../Components/SettingSvg.vue";
import SwitchSvg from "../Components/SwitchSvg.vue";
import DropdownAngle from "../Components/DropdownAngle.vue";
import HomeSvgDark from "../Components/HomeSvgDark.vue";
import DirectSvgDark from "../Components/DirectSvgDark.vue";
import FileSvgDark from "../Components/FileSvgDark.vue";
import ExploreSvgDark from "../Components/ExploreSvgDark.vue";
import ActivitySvgDark from "../Components/ActivitySvgDark.vue";

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
    components: {
      HomeSvg,
      DirectSvg,
      FileSvg,
      ExploreSvg,
      ActivitySvg,
      ProfileSvg,
      SaveSvg,
      SettingSvg,
      SwitchSvg,
      DropdownAngle,
      HomeSvgDark,
      DirectSvgDark,
      FileSvgDark,
      ExploreSvgDark,
      ActivitySvgDark,
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
    },
})