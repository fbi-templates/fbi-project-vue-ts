<template>
  <h1 class="typing">{{showingText}}</h1>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class Typing extends Vue {
  // data
  showingText:string = ''
  index:number = 0

  // prop
  @Prop({default: 'hello'})
  text:string

  // watch
  @Watch('showingText')
  onShowingTextChange(newVal) {
    console.log(newVal)
  }

  // methods
  typing() {
    if (this.index <= this['text'].length) {
      this.showingText = this['text'].slice(0, this.index)
      this.index++
    } else {
      return
    }
    setTimeout(this.typing, 100)
  }

  // hooks
  mounted() {
    this.typing()
  }
}
</script>

<style scoped>
.typing {
  position: absolute;
  left: 50%;
  top: 40%;
  color: #2c3e50;
  font-size: 100px;
  text-align: center;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
</style>
