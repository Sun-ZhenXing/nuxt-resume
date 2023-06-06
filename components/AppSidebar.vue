<script setup lang="ts">
const { isMobileOrTablet } = useDevice()
const showSetting = useShowSetting()

interface MenuItem {
  name: string
  icon: string
  activeIcon: string
}

const active = ref(0)
const { $toggleColorMode, $darkThemeIconName } = useNuxtApp()

const menus: MenuItem[] = [
  {
    name: '主页',
    icon: 'fluent:home-20-regular',
    activeIcon: 'fluent:home-20-filled',
  },
  {
    name: '我的',
    icon: 'fluent:person-20-regular',
    activeIcon: 'fluent:person-20-filled',
  },
  {
    name: '消息',
    icon: 'fluent:chat-20-regular',
    activeIcon: 'fluent:chat-20-filled',
  },
  {
    name: '设置',
    icon: 'fluent:settings-20-regular',
    activeIcon: 'fluent:settings-20-filled',
  },
]

function menuItemClass(i: number) {
  return [
    // 当菜单项缩小时不显示，菜单项出现文字时显示
    isMobileOrTablet ? 'mobile-feedback' : 'desktop-feedback lg:hover:bg-sky-500/[.1] sm:hover:bg-transparent',
    active.value === i ? 'text-active' : '',
  ]
}
</script>

<template>
  <div class="box-border w-full p-1">
    <div class="m-2 flex items-center justify-center">
      <div class="rounded-full p-4" :class="isMobileOrTablet ? 'mobile-feedback' : 'desktop-feedback'">
        <Icon name="logos:vitejs" size="48" />
      </div>
    </div>
    <van-divider :hairline="false" />
    <div
      v-for="item, i in menus" :key="i" class="m-2 flex cursor-pointer items-center justify-center rounded-full"
      :class="menuItemClass(i)" @click="active = i">
      <span
        v-show="active === i"
        :class="isMobileOrTablet ? '' : 'hover:bg-transparent lg:hover:bg-transparent sm:hover:bg-sky-500/[.1]'"
        class="rounded-full p-2">
        <Icon :name="item.activeIcon" size="24" />
      </span>
      <span
        v-show="active !== i"
        :class="isMobileOrTablet ? '' : 'hover:bg-transparent lg:hover:bg-transparent sm:hover:bg-sky-500/[.1]'"
        class="rounded-full p-2">
        <Icon :name="item.icon" size="24" />
      </span>
      <span class="block p-2 text-4 lg:block sm:hidden">{{ item.name }}</span>
    </div>
    <van-divider :hairline="false" />
    <div class="m-2 hidden w-8 w-full items-center justify-center sm:flex" @click="$toggleColorMode">
      <ClientOnly>
        <van-button round plain type="primary">
          <Icon :name="$darkThemeIconName" size="16" /> <span class="text-4">主题</span>
        </van-button>
      </ClientOnly>
    </div>
    <div class="m-2 w-8 w-full flex items-center justify-center">
      <van-button round plain type="primary" @click="showSetting = true">
        <Icon name="fluent:local-language-zi-24-filled" size="16" /> <span class="text-4">语言</span>
      </van-button>
    </div>
  </div>
</template>
