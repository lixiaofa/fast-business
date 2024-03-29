/*
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-03 17:13:51
 * @LastEditTime: 2023-03-13 17:31:12
 * @LastEditors: 司马老贼
 */
import { buildProps } from '@element-plus/utils'
// import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { ExtractPropTypes, PropType } from 'vue'
import type { PropertiesItem, SkuItem } from '../sku'
import type SkuRow from './index.vue'

export const skuRowProps = buildProps({
  row: {
    type: Object as PropType<SkuItem | PropertiesItem>,
    default: {},
  },
} as const)

export type SkuRowProps = ExtractPropTypes<typeof skuRowProps>

export type SkuRowInstance = InstanceType<typeof SkuRow>
