import axios from 'axios'
import qs from 'qs'
import { util } from '@/helper/index'

class Ajax {
  private apiRoot: string
  constructor(apiRoot) {
    this.apiRoot = apiRoot
  }
  private requestHandle(params) {
    if (params.method === 'post') {
      params.data = qs.stringify(params.data)
    }
    return new Promise(function(resolve, reject) {
      axios(params)
        .then(res => {
          if (res.data.code === '10000') {
            resolve(res.data.result)
          } else {
            reject(res.data)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  protected requestUrl(path) {
    return `${this.apiRoot}${path}`
  }
  protected requestPost(url, params, op?) {
    return this.requestHandle({
      method: 'post',
      url: url,
      data: params,
      headers: {
        'Content-Type': 'x-www-form-urlencoded'
      },
      ...op
    })
  }
  protected requestGet(url, params, op?) {
    return this.requestHandle({
      method: 'get',
      url: util.queryString(url, params),
      ...op
    })
  }
}

export default Ajax
