/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:03:04
 * @LastEditTime: 2023-02-23 11:40:44
 * @LastEditors: 司马老贼
 */
import { provideGlobalConfig } from '@element-plus/hooks'
import { INSTALLED_KEY } from '@element-plus/constants'
import { version } from './version'

import type { App, Plugin } from '@vue/runtime-core'
import type { ConfigProviderContext } from '@element-plus/tokens'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App, options?: ConfigProviderContext) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))

    if (options) provideGlobalConfig(options, app, true)
  }

  return {
    version,
    install,
  }
}
