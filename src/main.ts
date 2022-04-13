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

Vue.config.productionTip = false
const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false
}

Vue.use(VueProgressBar,options)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
