import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@/assets/Style/Main.css';
import VueProgressBar from 'vue-progressbar';
import VueImg from 'v-img';
import vueImgConfig from '@/constant/VimgOption';
import VPBOption from '@/constant/VPBOption';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import VToastNotification from '@/constant/VToastNotification';


Vue.use(VueImg , vueImgConfig);
Vue.use(VueProgressBar , VPBOption);
Vue.use(Toast , VToastNotification);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
