import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {Button,Row,Breadcrumb,BreadcrumbItem,Col,Carousel,CarouselItem,Dropdown,DropdownMenu,DropdownItem,Icon,Input,Popover} from 'element-ui'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component(Button.name,Button)
Vue.component(Row.name,Row)
Vue.component(Breadcrumb.name,Breadcrumb)
Vue.component(BreadcrumbItem.name,BreadcrumbItem)
Vue.component(Col.name,Col)
Vue.component(Carousel.name,Carousel)
Vue.component(CarouselItem.name,CarouselItem)
Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownItem.name,DropdownItem)
Vue.component(Icon.name,Icon)
Vue.component(Input.name,Input)
Vue.component(Popover.name,Popover)
Vue.use(BootstrapVue)
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
