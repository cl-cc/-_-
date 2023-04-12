<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2021-10-28 15:02:15
 * @LastEditors: 程
 * @LastEditTime: 2022-11-09 13:33:14
-->
<template>
  <router-view />
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
#app {
  background: var(--home-bg-color, #fff);
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
}
#app::-webkit-scrollbar {
  display: none; /* Chrome Safari */
  width: 0 !important;
}
</style>
