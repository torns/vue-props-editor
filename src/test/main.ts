import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";

import Main from "../../dist/vue-props-editor.common.js";

Vue.config.productionTip = false;

Vue.use(Main);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");