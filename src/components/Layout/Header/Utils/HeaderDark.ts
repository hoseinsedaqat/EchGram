import Vue from 'vue'
import HomeSvg from "../Components/svg/HomeSvg.vue";
import DirectSvg from "../Components/svg/DirectSvg.vue";
import FileSvg from "../Components/svg/FileSvg.vue";
import ExploreSvg from "../Components/svg/ExploreSvg.vue";
import ActivitySvg from "../Components/svg/ActivitySvg.vue";
import ProfileSvg from "../Components/svg/ProfileSvg.vue";
import SaveSvg from "../Components/svg/SaveSvg.vue";
import SettingSvg from "../Components/svg/SettingSvg.vue";
import SwitchSvg from "../Components/svg/SwitchSvg.vue";
import DropdownAngle from "../Components/DropdownAngle.vue";
import HomeSvgDark from "../Components/svg/HomeSvgDark.vue";
import DirectSvgDark from "../Components/svg/DirectSvgDark.vue";
import FileSvgDark from "../Components/svg/FileSvgDark.vue";
import ExploreSvgDark from "../Components/svg/ExploreSvgDark.vue";
import ActivitySvgDark from "../Components/svg/ActivitySvgDark.vue";
import ReportProblemSvg from "../Components/svg/ReportProblemSvg.vue";

export const headerDarker = Vue.extend({
    data() {
        return {
          homeNav: true,
          directNav: true,
          postNav:true,
          exploreNav:true,
          activityNav:true,
          forActivity:false
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
      ReportProblemSvg
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
          case "/hoseinsedaqat":
            this.homeNav = true
            this.directNav = true
            this.postNav = true
            this.exploreNav = true
            this.activityNav = true
            break
          default:
            this.homeNav = true
            this.directNav = true
            this.postNav = true
            this.exploreNav = true
            this.activityNav = true
        }
      },
    },
    methods:{
      navTrigger(){
        this.forActivity = !this.forActivity
      },
      // eslint-disable-next-line
      close(e:any) {
        if (!this.$el.contains(e.target)) {
          this.forActivity = false
        }
      }
    },
    mounted() {
        this.homeNav = false;
    },
    created() {
      window.addEventListener('click', this.close)
    },
  
    beforeDestroy() {
      window.removeEventListener('click', this.close)
    },
})