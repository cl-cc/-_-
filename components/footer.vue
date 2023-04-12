<!--
 * @Descripttion: 
 * @version: 
 * @Author: 程
 * @Date: 2021-10-28 15:02:15
 * @LastEditors: 程
 * @LastEditTime: 2023-02-11 14:32:53
-->
<template>
  <div class="main-home">
    <div class="top">{{ $t('resume.footer') }}</div>
    <div class="bottom">{{ $t('resume.copyright') }}</div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue';
export default {
  props: {
    status: Number,
  },
  setup(props) {
    //props 参数传递
    const state = reactive({});
    onMounted(() => {});
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped>
.main-home {
  width: 100%;
  height: 200px;
  background: #ede6e6;
  background-size: cover;
  background-position: center center;
}
.main-home .top {
  font-size: 40px;
  font-weight: bold;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.main-home .bottom {
  font-size: 20px;
  text-align: center;
  font-size: 14px;
  color: rgb(169, 169, 248);
  width: 40%;
  margin: -50px auto;
  line-height: 25px;
}
.main-home .bottom a {
  color: plum;
  cursor: pointer;
}
.main-home .bottom a:hover {
  color: rgb(169, 169, 248);
  cursor: pointer;
}
</style>
