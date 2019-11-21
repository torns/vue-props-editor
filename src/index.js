import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Frame from "./Frame/index.vue";

export default function install(Vue, options) {
  Vue.use(ElementUI);

  const mainDom = document.createElement("div");
  mainDom.className = "vue-props-editor";

  const body = document.querySelector("body");
  body.append(mainDom);

  const _Frame = new Vue(Frame).$mount(`.vue-props-editor`);

  Vue.mixin({
    mounted: function() {
      if (this === this.$root) {
        Vue.set(_Frame, "root", this);
      }
    }
  });
}
