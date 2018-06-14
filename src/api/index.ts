import Ajax from './ajax'
import { apiRoot } from '@/config/index'

// 使用proxyTable功能
// const apiRoot = process.env.NODE_ENV === 'development' ? '' : config.apiRoot
class Apis extends Ajax {
  constructor() {
    super(apiRoot)
  }
  getCustomers(data?) {
    return this.requestGet(this.requestUrl('customers'), data)
  }
  getLinks(data?) {
    return this.requestGet(this.requestUrl('links'), data)
  }
}

export default Apis
