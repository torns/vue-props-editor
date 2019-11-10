import Vue, { VueConstructor } from "vue";

import Tree from "element-ui/lib/tree";
import Drawer from "element-ui/lib/drawer";

import "element-ui/lib/theme-chalk/tree.css";
import "element-ui/lib/theme-chalk/drawer.css";

import Frame from "./Frame/index.vue";
import { mainClass } from "./config";

Vue.component('ElTree', Tree);
Vue.component('ElDrawer', Drawer);

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
