import { buildProps } from '@element-plus/utils'

import type { ExtractPropTypes } from 'vue'
import type Sku from './sku.vue'

export const skuProps = buildProps({})

export type SkuProps = ExtractPropTypes<typeof skuProps>
export type SkuInstance = InstanceType<typeof Sku>
