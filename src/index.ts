import IOT from './program'
import type { IPluginContext } from '@tarojs/service'

export default (ctx: IPluginContext) => {
  ctx.registerPlatform({
    name: 'iot',
    useConfigName: 'mini',
    async fn ({ config }) {
      const program = new IOT(ctx, config)
      await program.start()
    }
  })
}
