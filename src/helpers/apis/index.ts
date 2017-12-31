import $ajax from './ajax'

const API_ROOT =  process.env.NODE_ENV === 'dev' ? '' : 'http://www.example.com'
function requestUrl (path:string) {
  return `/api/${path}`
}

export default {
  getSomeThing(data) {
    return $ajax.get(requestUrl('getSomeThing'), data)
  }
}
