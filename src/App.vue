<template>
  <div id="app">
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- 侧边栏 -->
        <app-side-bar></app-side-bar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 占位 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue';
  import AppSideBar from './components/AppSideBar.vue';
  export default {
    components: {
        AppHeader,
        AppSideBar
    }
  };
</script>

<style>
</style>
