<template>
  <el-drawer
    :class="mainClass"
    title="选择组件"
    :visible="!selected"
    direction="rtl"
    :show-close="false"
    node-key="label"
  >
    <el-tree
      :data="treeData"
      :props="defaultProps"
      default-expand-all
      :expand-on-click-node="false"
    ></el-tree>
  </el-drawer>
</template>

<script lang="ts">
import { VueConstructor } from "vue";
import { Component, Vue } from "vue-property-decorator";
import { mainClass } from "../config";

type VueType = Vue | null;

interface data {
  root: VueType;
  selected: VueType;
  mainClass: string;
  defaultProps: object;
}

interface methods {
  getKeys(nodes: Array<Vue>): Array<number>;
}

@Component({
  data() {
    return <data>{
      root: null,
      selected: null,
      mainClass,
      defaultProps: {
        children: "$children",
        label: function(data: any, node: object) {
          if (data.label) {
            return data.label;
          }
          return data.$vnode && data.$vnode.tag;
        }
      }
    };
  },
  computed: {
    treeData(this: data | methods) {
      const data = <data>this;
      const methods = <methods>this;
      const root = <Vue>data.root;
      if (root) {
        return [
          {
            $children: root.$children,
            label: "root"
          }
        ];
      }
      return [];
    }
  },
  watch: {
    root(newValue: Vue) {
      console.log(newValue);
    }
  },
  components: {},
  methods: {}
})
export default class App extends Vue {}
</script>

<style lang="scss">
.vue-props-editor {
  color: #000;
}
</style>
