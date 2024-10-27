import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/font/font.css" 

Vue.config.productionTip = false

import {
  Swipe,
  SwipeItem,
  Button,
  Toast,
  Circle,
  Progress,
  Slider,
  Sticky,
  ActionSheet,
  Cell,
  CellGroup,
  ShareSheet,Checkbox, CheckboxGroup,Tab, Tabs,Tabbar, TabbarItem
} from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Button).use(Toast).use(Circle).use(Progress).use(Slider).use(Sticky).use(ActionSheet).use(Cell).use(CellGroup).use(ShareSheet).use(Checkbox).use(CheckboxGroup).use(Tab).use(Tabs).use(Tabbar).use(TabbarItem)
import "swiper/css/swiper.min.css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')