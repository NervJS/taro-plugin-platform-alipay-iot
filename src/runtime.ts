import { mergeReconciler, mergeInternalComponents } from '@tarojs/shared'
import {
  components as aliComponents,
  initNativeApi,
  hostConfig
} from '@tarojs/plugin-platform-alipay/dist/runtime-utils'
import { initIotApi } from './apis'
import { components } from './components'

hostConfig.initNativeApi = function (taro) {
  initNativeApi(taro)
  initIotApi(taro)
}

mergeReconciler(hostConfig)
mergeInternalComponents(aliComponents)
mergeInternalComponents(components)

