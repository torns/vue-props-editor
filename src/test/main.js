import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import Main from "../index";

Vue.config.productionTip = false;

Vue.use(Main);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");