<!--
 * @Description:
 * @Author: 司马老贼
 * @Date: 2023-02-22 19:03:04
 * @LastEditTime: 2023-02-28 21:31:48
 * @LastEditors: 司马老贼
-->
<template>
  <div class="play-container">
    <el-icon color="#409EFC">
      <el-icon-check />
    </el-icon>
    <el-icon>
      <el-icon-menu />
    </el-icon>
    <el-button>test</el-button>
    <div v-loading="true" />
    <div>
      <el-sku></el-sku>
    </div>
  </div>
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
