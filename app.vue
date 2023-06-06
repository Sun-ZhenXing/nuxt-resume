<script setup lang="ts">
const showLeft = ref(false)
const tabbarActive = ref(0)
const { $darkTheme, $toggleColorMode, $darkThemeIconName } = useNuxtApp()
const themeVars = useThemeVars()
</script>

<template>
  <van-config-provider :theme-vars="themeVars" :theme="$darkTheme" class="h-screen w-full">
    <nuxt-loading-indicator color="blue" :throttle="0" />
    <!-- 导航栏 -->
    <van-nav-bar title="标题" class="sm:hidden">
      <template #left>
        <div class="h-full w-8 flex items-center" @click="showLeft = !showLeft">
          <Icon name="ic:baseline-notes" size="18" />
        </div>
      </template>
      <template #right>
        <div class="h-full w-8 flex items-center" @click="$toggleColorMode">
          <ClientOnly>
            <Icon :name="$darkThemeIconName" size="18" />
          </ClientOnly>
        </div>
      </template>
    </van-nav-bar>
    <!-- 左侧弹出框 -->
    <van-popup v-model:show="showLeft" closeable position="left" class="block h-full w-1/2 sm:w-1/4">
      <app-sidebar />
    </van-popup>
    <!-- 底部导航栏 -->
    <div class="block sm:hidden">
      <van-tabbar v-model="tabbarActive">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </div>
    <!-- 主体内容 -->
    <div
      class="grid grid-cols-[200px,1fr,2rem] grid-cols-4 m-[0_auto] h-[calc(100%-var(--van-nav-bar-height))] max-w-[1320px] gap-2 md:grid-cols-13 sm:grid-cols-10 sm:h-full">
      <div class="col-span-2 hidden sm:block">
        <app-sidebar />
      </div>
      <div class="col-span-8 box-border h-full bg-indigo-100/[.1] p-4">
        <van-address-edit show-delete show-set-default show-search-result />
        <!-- <span class="hidden sm:block">@sm:block</span>
        <span class="hidden md:block">@md:block</span>
        <span class="hidden lg:block">@lg:block</span>
        <span class="hidden xl:block">@xl:block</span>
        <span class="hidden 2xl:block">@2xl:block</span> -->
      </div>
      <div class="col-span-3 box-border hidden bg-gray-100/[.1] p-4 md:block">Language: {{ useCurrentLang() }}</div>
    </div>
    <app-settings />
  </van-config-provider>
</template>
