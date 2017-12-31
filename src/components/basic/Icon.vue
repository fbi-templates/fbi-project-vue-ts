<template>
  <img class="icon" :class="iconClass" :src="iconTarget" alt="">
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  iconClass = 'icon-' + this['name']

  @Prop()
  name:string

  get iconTarget() {
    return require(`src/static/icons/icon-${this['name']}.png`)
  }
}
</script>
