import { noPromiseApis, otherApis } from './apis-list'

declare const my: any

function processApis (taro) {
  taro.ix = {}
  const apis = [...noPromiseApis, ...otherApis]

  apis.forEach(key => {
    if (!(key in my.ix)) {
      taro.ix[key] = () => {
        console.warn(`支付宝 IOT 小程序暂不支持 ${key}`)
      }
      return
    }

    if (otherApis.has(key)) {
      taro.ix[key] = (options, ...args) => {
        options = options || {}
        const obj = Object.assign({}, options)
        if (typeof options === 'string') {
          if (args.length) {
            return my.ix[key](options, ...args)
          }
          return my.ix[key](options)
        }

        const p: any = new Promise((resolve, reject) => {
          ['fail', 'success', 'complete'].forEach((k) => {
            obj[k] = (res) => {
              options[k] && options[k](res)
              if (k === 'success') {
                resolve(res)
              } else if (k === 'fail') {
                reject(res)
              }
            }
          })
          if (args.length) {
            my.ix[key](obj, ...args)
          } else {
            my.ix[key](obj)
          }
        })
        return p
      }
    } else {
      taro.ix[key] = (...args) => my.ix[key].apply(my, args)
    }
  })
}


export function initIotApi (taro) {
  processApis(taro)
}
