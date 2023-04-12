<template>
  <div class="main">
    <div class="screenfull-lang" @click="change_Lang">
      <img v-show="!isDark" src="@/assets/v2/drck-en.png" alt="" />
      <img v-show="isDark" src="@/assets/v2/drck-zh.png" alt="" />
    </div>
    <div class="toggle" @click.stop="toggleDark()">
      <el-icon v-show="!isDark" :size="30"><Moon /></el-icon>
      <el-icon v-show="isDark" :size="30"><Sunny /></el-icon>
    </div>
    <div class="main_box">
      <img v-show="!isDark" src="../assets/logo.png" alt="" />
      <div v-show="isDark" style="height: 80px"></div>
      <div class="line"></div>
      <h1>{{ $t('home.title') }}</h1>
      <p>{{ $t('home.tips') }}</p>
      <div class="main_btn">
        <div class="one" @click="go(1)">{{ $t('home.resume') }}</div>
        <div class="one" @click="go(2)" style="background: #fb664a">CSDN</div>
        <div class="one" @click="go(3)" style="background: #2c3e50">GITEE</div>
        <div class="one" @click="go(4)" style="background: #409eff">{{ $t('home.plugin') }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, reactive, toRefs, ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessageBox } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useDark, useToggle } from '@vueuse/core';
export default {
  name: 'index',
  setup() {
    const router = useRouter();
    const state = reactive({});
    const langT = ref(false);
    const { locale } = useI18n();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const go = e => {
      switch (e) {
        case 1:
          // router.push('/home');
          router.push('/resume');
          break;
        case 2:
          window.open('https://blog.csdn.net/weixin_44255044');
          break;
        case 3:
          window.open('https://gitee.com/chenglei0221');
          break;
        case 4:
          router.push('/pluginCollection');
          break;
      }
    };
    change_Lang();
    //语言切换
    function change_Lang() {
      let lang = langT.value ? 'en' : 'zh';
      langT.value = !langT.value;
      locale.value = lang;
      localStorage.setItem('lang', lang);
    }
    onMounted(() => {
      browserRedirect();
    });
    const browserRedirect = () => {
      var sUserAgent = navigator.userAgent.toLowerCase();
      var bIsIpad = sUserAgent.match(/ipad/i) == 'ipad';
      var bIsIphoneOs = sUserAgent.match(/iphone os/i) == 'iphone os';
      var bIsMidp = sUserAgent.match(/midp/i) == 'midp';
      var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == 'rv:1.2.3.4';
      var bIsUc = sUserAgent.match(/ucweb/i) == 'ucweb';
      var bIsAndroid = sUserAgent.match(/android/i) == 'android';
      var bIsCE = sUserAgent.match(/windows ce/i) == 'windows ce';
      var bIsWM = sUserAgent.match(/windows mobile/i) == 'windows mobile';
      if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
        ElMessageBox.alert('暂时不支持手机端查看,请您切换至pc端查看', '提示', {
          confirmButtonText: '确认',
          callback: action => {
            ElMessage({
              type: 'info',
              message: `暂不支持手机端查看`,
            });
          },
        });
      }
    };
    return {
      go,
      isDark,
      change_Lang,
      toggleDark,
      ...toRefs(state),
    };
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100vh;
  background: url(../assets/index.png);
  background-size: 100% 100%;
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
  .main_box {
    padding-top: 100px;
    padding-left: 150px;
    img {
      width: 120px;
      height: 80px;
    }
    h1 {
      max-width: 60%;
      height: 200px;
      font-size: 40px;
      font-weight: 500;
      line-height: 76px;
      margin-top: 40px;
    }
    p {
      font-size: 18px;
      margin-top: 50px;
      font-size: rgb(68, 67, 67);
    }
    .main_btn {
      display: flex;
      margin-top: 100px;
      width: 50%;
      .one {
        width: 200px;
        height: 60px;
        background: #38baa0;
        color: #fff;
        font-size: 20px;
        text-align: center;
        line-height: 60px;
        cursor: pointer;
        transition: all 0.2s ease-in;
        margin-right: 15px;
        border-radius: 4px;
        &:hover {
          box-shadow: 1px 2px 6px #2c3e50;
        }
      }
    }
    .line {
      width: 40%;
      height: 1px;
      background: #ccc;
      margin-top: 20px;
    }
  }
}
</style>
