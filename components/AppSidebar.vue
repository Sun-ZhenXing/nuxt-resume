<script setup lang="ts">
interface MenuItem {
  name: string
  icon: string
  hoverIcon: string
}

const active = ref(0)
const { $toggleColorMode, $darkThemeIconName } = useNuxtApp()

const menus: MenuItem[] = [
  {
    name: '主页',
    icon: 'fluent:home-20-regular',
    hoverIcon: 'fluent:home-20-filled',
  },
  {
    name: '我的',
    icon: 'fluent:person-20-regular',
    hoverIcon: 'fluent:person-20-filled',
  },
  {
    name: '消息',
    icon: 'fluent:chat-20-regular',
    hoverIcon: 'fluent:chat-20-filled',
  },
  {
    name: '设置',
    icon: 'fluent:settings-20-regular',
    hoverIcon: 'fluent:settings-20-filled',
  },
]
</script>

<template>
  <div class="box-border w-full p-1">
    <div class="m-2 flex items-center justify-center">
      <div class="rounded-full p-4 hover:bg-sky-500/[.2]">
        <Icon name="logos:vitejs" size="48" />
      </div>
    </div>
    <van-divider :hairline="false" />
    <div
      v-for="item, i in menus" :key="i"
      class="m-2 flex cursor-pointer items-center justify-center rounded-full hover:bg-sky-500/[.2]"
      :class="active === i ? 'text-sky-600' : ''" @click="active = i">
      <span v-show="active === i" class="p-2">
        <Icon :name="item.hoverIcon" size="32" />
      </span>
      <span v-show="active !== i" class="p-2">
        <Icon :name="item.icon" size="32" />
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
  </div>
</template>
