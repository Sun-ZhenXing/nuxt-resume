<script setup lang="ts">
import { Locale } from 'vant'

import zhCN from 'vant/es/locale/lang/zh-CN'
import enUS from 'vant/es/locale/lang/en-US'
import jaJP from 'vant/es/locale/lang/ja-JP'

const showSetting = useShowSetting()
const value = ref('')
const active = ref(0)

function changeLanguage() {
  if (active.value === 1)
    Locale.use('en-US', enUS)
  else if (active.value === 2)
    Locale.use('ja-JP', jaJP)
  else
    Locale.use('zh-CN', zhCN)
  showSetting.value = false
}
</script>

<template>
  <van-dialog
    :show="showSetting" title="语言 | Language" show-confirm-button show-cancel-button
    @cancel="showSetting = false" @confirm="changeLanguage">
    <van-search v-model="value" placeholder="Language" />
    <van-list>
      <van-cell
        class="cursor-pointer" :class="active === 0 ? 'text-active!' : ''" title="中文"
        @click="active = 0">
        zh-CN
      </van-cell>
      <van-cell
        class="cursor-pointer" :class="active === 1 ? 'text-active!' : ''" title="English"
        @click="active = 1">
        en-US
      </van-cell>
      <van-cell
        class="cursor-pointer" :class="active === 2 ? 'text-active!' : ''" title="日本語"
        @click="active = 2">
        ja-JP
      </van-cell>
    </van-list>
  </van-dialog>
</template>
