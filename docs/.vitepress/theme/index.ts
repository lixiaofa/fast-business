/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:03:03
 * @LastEditTime: 2023-02-23 11:45:41
 * @LastEditors: 司马老贼
 */
import ElementPlus from 'element-plus'

import VPApp, { NotFound, globals } from '../vitepress'
import { define } from '../utils/types'
import 'uno.css'
import './style.css'
import type { Theme } from 'vitepress'

export default define<Theme>({
  NotFound,
  Layout: VPApp,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)

    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
})
