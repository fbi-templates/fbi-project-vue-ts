import { util, apis } from '@/helper/index.ts'
import * as filters from '@/global/filters.ts'
import BaseIcon from '@/components/BaseIcon.vue'

interface IHelpers {
  $apis?: Object
  $util?: Object
}

class Global {
  private helpers: IHelpers
  constructor(Vue) {
    this.initHelpers(Vue)
    this.initFilters(Vue)
    this.initComponent(Vue)
  }
  private initHelpers(Vue) {
    this.helpers = {
      $apis: apis,
      $util: util
    }
    Object.keys(this.helpers).forEach(key => {
      Object.defineProperty(Vue.prototype, key, {
        value: this.helpers[key]
      })
    })
  }
  private initFilters(Vue) {
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
  }
  private initComponent(Vue) {
    Vue.component('v-icon', BaseIcon)
  }
}

export default Global
