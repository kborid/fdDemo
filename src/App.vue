<template>
  <div id="app">
    <!-- top -->
    <div class="top">
      <img class="logo" src="./images/logo.png" width="50px" height="50px"/>
    </div>
    <!-- bottom -->
    <div class="content">
      <!-- left -->
      <div class="left">
        <leftMenu/>
      </div>
      <!-- main -->
      <div class="mainBox">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

import leftMenu from '@/components/app/left-menu/index.vue';

export default {
    name: 'App',
    components: {leftMenu}
};
</script>

<style lang="less">
@import "./css/index.less";
</style>
