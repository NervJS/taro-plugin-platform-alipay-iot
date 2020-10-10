# `@tarojs/plugin-platform-alipay-iot`

Taro 插件。用于支持编译为支付宝 IOT 端小程序。

## 使用

#### 1. 配置插件

```js
// Taro 项目配置
module.exports = {
  // ...
  plugins: [
    '@tarojs/plugin-platform-alipay-iot'
  ]
}
```

#### 2. 编译为支付宝 IOT 端小程序

```shell
taro build --type iot
taro build --type iot --watch
```

#### 其它

##### 平台判断

```js
if (process.TARO_ENV === 'iot') {
  // ...
}
```

##### API

支付宝 IOT 端小程序拓展了一些独有 API，可以通过 `Taro.iot.xxx` 来调用，例：

```js
Taro.ix.getSysProp({
  key: 'ro.serialno'
})
  .then(res => console.log(res))
```

##### 组件

支付宝 IOT 端小程序拓展了一些独有组件，可像普通 Taro 内置组件一样使用，例：

```js
import { Poster, IxGrid, IxNativeList, IxNativeGrid } from '@tarojs/components'

function Index () {
  return (
    <>
      <Poster></Poster>
      <IxGrid></IxGrid>
      <IxNativeList></IxNativeList>
      <IxNativeGrid></IxNativeGrid>
    </>
  )
}
```
