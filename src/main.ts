import Vue from "vue";
import router from "./router";
import store from "./store";
import Main from "./index";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Main);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");