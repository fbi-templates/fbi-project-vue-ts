<template>
  <img class="icon" :class="iconClass" :src="iconTarget" alt="">
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: {
    name: String
  }
})
export default class Icon extends Vue {
  iconClass = 'icon-' + this['name']
  get iconTarget() {
    return require(`src/static/icons/icon-${this['name']}.png`)
  }
}
</script>
