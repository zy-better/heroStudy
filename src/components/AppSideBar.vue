<template>
  <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
          
          <!-- <li class="active"><a href="#">英雄列表</a></li>
          <li><a href="#">武器列表</a></li>
          <li><a href="#">装备列表</a></li> -->
          <router-link tag="li" to="/heroes">
              <a>英雄管理</a>
          </router-link>
          <router-link tag="li" to="/equips">
              <a>武器管理</a>
          </router-link>
          <router-link tag="li" to="/weapons">
              <a>装备管理</a>
          </router-link>
        </ul>
  </div>   
</template>

<script>
    
</script>

<style>

</style>

