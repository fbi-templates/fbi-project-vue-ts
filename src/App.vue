<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'app'
}
</script>

<style>
@import "./static/css/index.css";

#app {
  width: 100%;
  height: 100%;
}
</style>