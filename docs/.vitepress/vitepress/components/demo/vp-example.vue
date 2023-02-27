<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:03:03
 * @LastEditTime: 2023-02-23 12:16:53
 * @LastEditors: 司马老贼
-->
<script setup lang="ts">
defineProps({
  file: {
    type: String,
    required: true,
  },
  demo: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="example-showcase">
    <ClientOnly>
      <component :is="demo" v-if="demo" v-bind="$attrs" />
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
.example-showcase {
  padding: 1.5rem;
  margin: 0.5px;
  background-color: var(--bg-color);
}
</style>
