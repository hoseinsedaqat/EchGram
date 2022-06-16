import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/Style/Main.css'
import VueProgressBar from 'vue-progressbar'
import VueImg from 'v-img';

const vueImgConfig = {
  // Use `alt` attribute as gallery slide title
  altAsTitle: false,
  // Display 'download' button near 'close' that opens source image in new tab
  sourceButton: false,
  // Event listener to open gallery will be applied to <img> element
  openOn: 'click',
  // Show thumbnails for all groups with more than 1 image
  thumbnails: false,
}

Vue.use(VueImg,vueImgConfig);

Vue.config.productionTip = false
const options = {
  color: 'rgb(193, 53, 132)',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.9s',
    opacity: '0.6s',
    termination: 1000
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar,options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
