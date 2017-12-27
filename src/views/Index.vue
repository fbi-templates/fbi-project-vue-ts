<template>
  <div class="index">
    <typing :text="'hello world'"/>
    <div class="face-wrap">
      <v-icon v-for="(name, index) in icons" :key="index" :name="name" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Typing from 'components/partials/Typing.vue'

@Component({
  components: {
    Typing
  }
})

export default class Index extends Vue {
  icons = ['face-1', 'face-2', 'face-3', 'face-4', 'face-5']

  mounted () {
    console.log('children mounted')
  }
}
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  .face-wrap {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.icon {
  width: 30px;
  height: 30px;
}
</style>
