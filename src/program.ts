import { Alipay } from '@tarojs/plugin-platform-alipay'
import { components } from './components'

const PACKAGE_NAME = '@tarojs/plugin-platform-alipay-iot'

export default class IOT extends Alipay {
  platform = 'iot'
  runtimePath = `${PACKAGE_NAME}/dist/runtime`
  reactComponents = `${PACKAGE_NAME}/dist/components-react`

  /**
   * 增加组件或修改组件属性
   */
  modifyComponents () {
    // 先按微信标准对齐组件
    super.modifyComponents()
    this.template.mergeComponents(this.ctx, components)
  }
}
