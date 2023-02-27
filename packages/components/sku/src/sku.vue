<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:10:47
 * @LastEditTime: 2023-02-27 10:12:03
 * @LastEditors: 司马老贼
-->
<template>
  <div>
    <!-- 11111111111111
            <slot /> -->
    <van-button type="primary" />
    <!-- <Button type="primary" /> -->
  </div>
</template>

<script lang="ts" setup>
import { skuProps } from './sku'
// import { Button } from 'vant'
// import 'vant/es/button/style';

defineOptions({
  name: 'ElSku',
})

const props = defineProps(skuProps)

// init here
</script>
