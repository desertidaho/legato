import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';


Vue.config.productionTip = false
Vue.use(VCalendar, {
  firstDayOfWeek: 1
});

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
