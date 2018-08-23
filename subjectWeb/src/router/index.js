import Vue from 'vue'
import Router from 'vue-router'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import index from '@/components/index'

Vue.use(Router);
Vue.use(iview);
Vue.prototype.$http = axios;

export default new Router({
  routes: [
    {
      path: '/', component: index
    }
  ]
})
