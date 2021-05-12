import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import "roboto-fontface/css/roboto/roboto-fontface.css"
import "@mdi/font/css/materialdesignicons.css"
import "@mdi/js"

import DefaultLayout from "./layouts/default-layout.vue"
import AuthLayout from "./layouts/auth-layout.vue"

Vue.component("default-layout", DefaultLayout) //todo что значит жта запись
Vue.component("auth-layout", AuthLayout)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
