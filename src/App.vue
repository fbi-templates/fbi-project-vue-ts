<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="postcss">
@import './assets/css/base.css';
#app {
  text-align: center;
  color: $color;
}
</style>
