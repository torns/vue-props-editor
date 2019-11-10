import Vue, { VueConstructor } from "vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Frame from "./Frame/index.vue";
import { mainClass } from "./config";

const VuePortal = require("@linusborg/vue-simple-portal");

Vue.use(ElementUI);
Vue.use(VuePortal, { name: "portal" });

export default function install(Vue: VueConstructor<Vue>, options: object) {
  const mainDom: HTMLDivElement = document.createElement("div");
  mainDom.className = mainClass;

  const body = <HTMLBodyElement>document.querySelector("body");
  body.append(mainDom);

  const _Frame = new Vue(Frame).$mount(`.${mainClass}`);
  
  Vue.mixin({
    mounted: function(this: Vue) {
      if (this === this.$root) {
        Vue.set(_Frame, "root", this);
      }
    }
  });
}
