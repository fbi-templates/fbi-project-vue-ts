import $ajax from './ajax'

function requestUrl (path:string) {
  return `/api/${path}`
}

export default {
  getSomeThing(data) {
    return $ajax.get(requestUrl('getNiceLinks'), data)
  }
}
