import Vue from "vue";
import vuetify from "./plugins/vuetify";
import router from './router'
import App from "./App.vue"

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
