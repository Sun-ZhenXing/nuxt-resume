<script setup lang="ts">
import { storeToRefs } from 'pinia'

const showLeft = ref(false)
const tabbarActive = ref(0)
const { $darkTheme, $toggleColorMode } = useNuxtApp()
const themeVars = useThemeVars()
const appStore = useAppStore()
const { isDarkTheme, isUsingSystemDarkMode } = storeToRefs(appStore)

const iconName = computed(() => {
  if (isUsingSystemDarkMode.value)
    return 'ic:baseline-brightness-medium'
  else
    return isDarkTheme.value ? 'ic:baseline-dark-mode' : 'ic:baseline-light-mode'
})

function toggleSidebar() {
  showLeft.value = !showLeft.value
}
</script>

<template>
  <div>
    <van-config-provider :theme-vars="themeVars" :theme="$darkTheme">
      <nuxt-loading-indicator color="blue" :throttle="0" />
      <van-nav-bar title="标题">
        <template #left>
          <div class="h-full w-8 flex items-center" @click="toggleSidebar">
            <Icon name="ic:baseline-notes" size="18" />
          </div>
        </template>
        <template #right>
          <div class="h-full w-8 flex items-center" @click="$toggleColorMode">
            <ClientOnly>
              <Icon :name="iconName" size="18" />
            </ClientOnly>
          </div>
        </template>
      </van-nav-bar>
      <van-popup
        v-model:show="showLeft" closeable position="left"
        :style="{ minWidth: '300px', width: '30%', height: '100%' }">
        <app-sidebar />
      </van-popup>
      <van-tabbar v-model="tabbarActive">
        <van-tabbar-item icon="home-o">标签</van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
      </van-tabbar>
    </van-config-provider>
  </div>
</template>
