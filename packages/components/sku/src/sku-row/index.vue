<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-03-13 09:24:50
 * @LastEditTime: 2023-03-15 08:58:46
 * @LastEditors: 司马老贼
-->
<template>
  <div :class="ns.b()">
    <div :class="ns.e('label')">
      {{ row.k }}
      <span
        v-if="(row as PropertiesItem).is_multiple"
        :class="ns.m('multiple')"
      >
        (可多选)</span
      >
    </div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { PropertiesItem } from '../sku'
import { skuRowProps } from './sku-row'

defineOptions({
  name: 'ElSkuRow',
})
const ns = useNamespace('sku-row')

defineProps(skuRowProps)
</script>
