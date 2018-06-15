<template>
  <div class="page-index">
    <v-icon name="logo"></v-icon>
    <hello-world/>
    <p class="current-time">{{currentTime}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { Component } from 'vue-property-decorator'
import { setInterval } from 'timers'

@Component({
  components: {
    HelloWorld
  }
})
export default class Index extends Vue {
  currentTime: string = ''
  isShowCitySelector: boolean = false

  getLinks() {
    this.$apis.getLinks()
  }
  initCurrentTime() {
    setInterval(() => {
      this.currentTime = this.$util.format('yyyy-MM-dd hh:mm:ss')
    }, 1 * 1000)
  }

  mounted() {
    this.initCurrentTime()
  }
}
</script>

<style lang="postcss" scoped>
.current-time {
  color: #42b983;
}
</style>
