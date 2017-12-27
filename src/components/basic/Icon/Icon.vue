<template>
  <img class="icon" :class="iconClass" :src="iconTarget" alt="">
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop} from 'vue-property-decorator'

@Component
export default class Typing extends Vue {
  @Prop() name:string

  get iconClass() {
    return 'icon-' + this.name
  }
  get iconTarget() {
    return require(`src/static/icons/icon-${this.name}.png`)
  }
}
// export default {
//   data () {
//     return {
//       iconClass: 'icon-' + this.name
//     }
//   },
//   props: {
//     name: {
//       type: String,
//       required: true,
//       default: ''
//     }
//   },
//   computed: {
//     iconTarget() {
//       return require(`src/static/icons/icon-${this.name}.png`)
//     }
//   }
// }
</script>
