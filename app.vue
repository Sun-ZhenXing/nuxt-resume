<script setup lang="ts">
const showLeft = ref(false)
// const tabbarActive = ref(0)
const { $darkTheme, $toggleColorMode, $darkThemeIconName } = useNuxtApp()
const themeVars = useThemeVars()

const testItems = [
  { content: '6a6l6e6x@gmail.com', icon: 'logos:google-gmail', url: 'mailto:6a6l6e6x@gmail.com' },
  { content: '@Sun-ZhenXing', icon: 'logos:github-icon', url: 'https://github.com/Sun-ZhenXing/' },
  { content: '@AlexSun24409960', icon: 'logos:twitter', url: 'https://twitter.com/AlexSun24409960' },
]
</script>

<template>
  <van-config-provider :theme-vars="themeVars" :theme="$darkTheme" class="A4 main-content w-full">
    <nuxt-loading-indicator color="blue" :throttle="50" />
    <!-- 导航栏 -->
    <van-nav-bar title="标题" class="print:hidden sm:hidden">
      <template #left>
        <div class="h-screen w-8 flex items-center" @click="showLeft = !showLeft">
          <Icon name="ic:baseline-notes" size="18" />
        </div>
      </template>
      <template #right>
        <div class="h-screen w-8 flex items-center" @click="$toggleColorMode">
          <ClientOnly>
            <Icon :name="$darkThemeIconName" size="18" />
          </ClientOnly>
        </div>
      </template>
    </van-nav-bar>
    <!-- 左侧弹出框 -->
    <van-popup v-model:show="showLeft" closeable position="left" class="block h-screen w-1/2 sm:w-1/4">
      <app-sidebar />
    </van-popup>
    <!-- 主体内容 -->
    <div
      class="grid grid-cols-[200px,1fr,2rem] grid-cols-4 m-[0_auto] h-[calc(100%-var(--van-nav-bar-height))] max-w-[1120px] gap-2 md:grid-cols-10 sm:grid-cols-10 sm:h-screen print:gap-0">
      <div class="col-span-2 hidden sm:block print:hidden">
        <app-sidebar />
      </div>
      <div class="col-span-8 print:col-span-10">
        <div class="sheet grid grid-cols-[200px,1fr,2rem] grid-cols-12">
          <div class="col-span-4 bg-gray-100">
            <resume-info-card name="孙振兴" :items="testItems" />
            <resume-text-card title="简单文字卡片" content="内容" class="pl-4 pr-4" />
            <resume-education-card title="教育背景模块" content="内容" class="pl-4 pr-4" />
            <resume-award-card title="获奖信息模块" content="内容" class="pl-4 pr-4" />
          </div>
          <resume-markdown-card class="col-span-8" />
        </div>
      </div>
    </div>
    <app-settings />
  </van-config-provider>
</template>
