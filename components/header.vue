<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2022-12-01 11:33:15
 * @LastEditors: 程
 * @LastEditTime: 2023-02-11 14:32:37
-->
<template>
  <div class="header">
    <div class="back" @click="back">
      <!-- <img src="@/assets/back.png" alt="" /> -->
    </div>
    <div class="title">{{ $t('tool.title') }}</div>
    <div class="tip">
      <div class="screenfull-lang" @click="change_Lang">
        <img v-show="!isDark" src="@/assets/v2/drck-en.png" alt="" />
        <img v-show="isDark" src="@/assets/v2/drck-zh.png" alt="" />
      </div>
      <div class="toggle" @click.stop="toggleDark()">
        <el-icon v-show="!isDark" :size="30"><Moon /></el-icon>
        <el-icon v-show="isDark" :size="30"><Sunny /></el-icon>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { useDark, useToggle } from '@vueuse/core';
const langT = ref(false);
const { locale } = useI18n();
const isDark = useDark();
const toggleDark = useToggle(isDark);
change_Lang();
//语言切换
function change_Lang() {
  let lang = langT.value ? 'en' : 'zh';
  langT.value = !langT.value;
  locale.value = lang;
  localStorage.setItem('lang', lang);
}
const router = useRouter();
function back() {
  router.go(-1);
}
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 80px;
  box-shadow: 0px 0px 6px 0px var(--home-topline-color, rgba(4, 0, 0, 0.1));
  display: grid;
  place-content: center;
  position: fixed;
  top: 0;
  background-image: radial-gradient(transparent 10px, var(--home-top-color, rgba(255, 255, 255, 0.1)) 1px);
  -webkit-backdrop-filter: saturate(50%) blur(7px);
  backdrop-filter: saturate(50%) blur(10px);
  z-index: 9999;
  .back {
    position: absolute;
    top: 15px;
    left: 50px;
    cursor: pointer;
    img {
      width: 50px;
      height: 50px;
    }
  }
  .title {
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: var(--home-tips-color, #434343);
  }
  .tip {
    position: absolute;
    right: 0;
    top: -15px;
    .toggle {
      float: right;
      margin: 40px 40px 0 0;
      cursor: pointer;
    }
    .screenfull-lang {
      float: right;
      margin: 40px 100px 0 0;
      cursor: pointer;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>
