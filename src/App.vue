<template>
  <div id="app">
    <div class="app-main">
      <router-view></router-view>
    </div>
    <div class="app-tabbar">
      <router-view name="FooterBar"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/style/reset.css";


</style>
