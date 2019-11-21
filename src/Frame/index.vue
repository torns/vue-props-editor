<template>
  <div class="vue-props-editor">
    <el-drawer
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
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span v-if="data.$el === routerData.app.$el">
            <el-tag size="mini">router-view</el-tag>
          </span>
          <span v-if="routeData.matched.find(d => d.instances.default === data)">
            <el-tag size="mini" type="success">{{routeData.fullPath}}</el-tag>
          </span>
          <span>
            <el-tag size="mini" type="success" @click="log(data)">查看</el-tag>
          </span>
          <span
            v-if="data.$el && isShow(data.$el)"
            @mouseover="hover(data)"
            @mouseout="unhover"
            class="vue-props-editor__show-position"
          >
            <el-tag size="mini" type="success">查看位置</el-tag>
          </span>
          <span v-else class="vue-props-editor__show-position">
            <el-tag size="mini" type="info">HIDE</el-tag>
          </span>
        </div>
      </el-tree>
    </el-drawer>
    <div class="vue-props-editor__current-dom" :style="currentDOM"></div>
  </div>
</template>

<script>
import Vue from "vue";

const currentDOM = {
  top: 0,
  left: 0,
  width: 0,
  height: 0
};

export default {
  data() {
    return {
      root: null,
      selected: null,
      defaultProps: {
        children: "$children",
        label: function(data, node) {
          if (data.$options && data.$options._componentTag) {
            return data.$options._componentTag;
          }
          if (data.label) {
            return data.label;
          }
          return data.$vnode && data.$vnode.tag;
        }
      },
      routerData: {},
      routeData: {},
      currentDOM
    };
  },
  computed: {
    treeData() {
      const data = this;
      const methods = this;
      const root = data.root;
      if (root) {
        data.routerData = root.$router;
        data.routeData = root.$route;
        console.log(data.routerData);
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
    root(newValue) {
      console.log(newValue);
    }
  },
  components: {},
  methods: {
    log(info) {
      debugger;
    },
    hover(data) {
      if (!data.$el) {
        return;
      }
      this.currentDOM.top = `${data.$el.offsetTop}px`;
      this.currentDOM.left = `${data.$el.offsetLeft}px`;
      this.currentDOM.width = `${data.$el.offsetWidth}px`;
      this.currentDOM.height = `${data.$el.offsetHeight}px`;
    },
    unhover() {
      this.currentDOM.top = 0;
      this.currentDOM.left = 0;
      this.currentDOM.width = 0;
      this.currentDOM.height = 0;
    },
    isShow(dom) {
      return (
        dom.offsetTop || dom.offsetLeft || dom.offsetWidth || dom.offsetHeight
      );
    }
  }
};
</script>

<style lang="scss">
.vue-props-editor {
  color: #000;
  &__current-dom {
    position: absolute;
    border: 1px solid #6a0ebd;
    z-index: 9999;
    background: rgba(127, 77, 181, 0.39);
    padding: 0.5px;
    box-sizing: border-box;
  }
  &__show-position {
    float: right;
  }
}
.custom-tree-node {
  flex: 1;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: space-between; */
  font-size: 14px;
  padding-right: 8px;
}
</style>
