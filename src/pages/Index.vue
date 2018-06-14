<template>
  <div class="page-index">
    <v-icon name="logo"></v-icon>
    <hello-world/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'
import { Component } from 'vue-property-decorator'

@Component({
  components: {
    HelloWorld
  }
})
export default class Index extends Vue {
  currentTime: string = ''
  isShowCitySelector: boolean = false

  onSelectCity(city) {
    console.log(city)
  }
  getLinks() {
    this.$apis.getLinks()
  }
  initCurrentTime() {
    this.currentTime = this.$util.format('yyyy-MM-dd hh:mm:ss')
  }

  mounted() {
    this.initCurrentTime()
  }
}
</script>

<style lang="postcss" scoped>
</style>
