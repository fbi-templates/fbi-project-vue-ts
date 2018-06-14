declare module '*.vue' {
  import Vue from 'vue'
  import ApisConstructor from '@/api/index'
  import UtilConstructor from '@/helper/util'
  module 'vue/types/vue' {
    interface Vue {
      $apis: ApisConstructor
      $util: UtilConstructor
    }
  }
  export default Vue
}
