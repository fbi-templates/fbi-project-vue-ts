<template>
  <img :src="iconSrc" :class="'icon-' + this.name" class="icon" />
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class Icon extends Vue {
  @Prop({ required: true })
  name: string
  @Prop({ default: 'png' })
  type: string

  get iconSrc() {
    return require(`@/assets/icons/icon-${this.name}.${this.type}`)
  }
}
</script>

<style lang="postcss" scoped>
.icon {
  width: auto;
  height: auto;
}
</style>
