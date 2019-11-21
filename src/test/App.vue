<template>
  <div id="app">
    <el-menu class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">菜单1</el-menu-item>
      <el-submenu index="2">
        <template slot="title">下拉菜单</template>
        <el-menu-item index="2-1">子菜单1</el-menu-item>
        <el-menu-item index="2-2">子菜单2</el-menu-item>
        <el-menu-item index="2-3">子菜单3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">子菜单4</template>
          <el-menu-item index="2-4-1">子子菜单1</el-menu-item>
          <el-menu-item index="2-4-2">子子菜单2</el-menu-item>
          <el-menu-item index="2-4-3">子子菜单3</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body,
html {
  margin: 0;
}
</style>
