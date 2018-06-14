class Util {
  // 例子：new Util().format("yyyy-MM-dd hh:mm:ss")  ==> 2006-7-2 08:09:14
  format(fmt: string): string {
    let date = new Date()
    var o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      S: date.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return fmt
  }
  getFormatBankStr(str: string): string {
    return `${str}`
      .replace(/[^\d]/g, '')
      .split('')
      .map((item, index) => {
        if (index && index % 4 === 0) {
          return ' ' + item
        }
        return item
      })
      .join('')
  }
  getFormatBirthday(date: string, symbol: string = '-'): string {
    if (!date) {
      return ''
    }
    let birthday = new Date(date)
    let year = birthday.getFullYear()
    let mouth: string | number = birthday.getMonth() + 1
    mouth = mouth > 9 ? mouth : '0' + mouth
    let day: string | number = birthday.getDate()
    day = day > 9 ? day : '0' + day
    return `${year}${symbol}${mouth}${symbol}${day}`
  }
  query(search) {
    let str = search || window.location.search
    let objURL: Object = {}
    str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), ($0, $1, $2, $3) => {
      objURL[$1] = $3
    })
    return objURL
  }
  queryString(url, query) {
    let str = []
    for (let key in query) {
      str.push(key + '=' + query[key])
    }
    return url + '?' + str.join('&')
  }
  isLegalUrl(str: string): boolean {
    let pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\\+.~#?&//=]*)/
    return pattern.test(str)
  }
  isLegalUsername(str: string): boolean {
    let pattern = /^[a-zA-Z0-9]{3,16}$/
    return pattern.test(str)
  }
  isLegalEmail(str: string): boolean {
    let pattern = new RegExp(
      '^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$',
      'g'
    )
    return pattern.test(str)
  }
  isLegalPassword(str: string): boolean {
    let pattern = new RegExp(
      '^(?=.*[0-9])(?=.*[A-Za-z])[a-zA-Z0-9!@#$%^&*]{6,18}$',
      'g'
    )
    return pattern.test(str)
  }
  isLegalMobile(str: string): boolean {
    let pattern = /^1(3|4|5|7|8)\d{9}$/
    return pattern.test(str)
  }
  getClearNumber(formatNumber: string): string {
    return `${formatNumber}`.replace(/[^\d]/g, '')
  }
  getClientEnv(): string {
    let ua = window.navigator.userAgent
    let cardNiuMatch = ua.match(/mymoneysms/gi)
    let isCardNiu = cardNiuMatch && cardNiuMatch.length > 0
    return isCardNiu ? 'cardniu' : 'mymoney'
  }
  /* -----------------------------sessionStorage------------------------------------ */
  setStorage(name: string, content: any) {
    if (!name) return
    if (typeof content !== 'string') {
      content = JSON.stringify(content)
    }
    window.sessionStorage.setItem(name, content)
  }
  getStorage(name: string): any {
    if (!name) return
    let value = ''
    try {
      value = JSON.parse(window.sessionStorage.getItem(name))
    } catch (error) {
      value = window.sessionStorage.getItem(name)
    }
    return value
  }
  removeStorage(name: string) {
    if (!name) return
    window.sessionStorage.removeItem(name)
  }
}

export default Util
