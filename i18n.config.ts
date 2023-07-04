import type { I18nOptions } from 'vue-i18n'

// remove declare when @nuxtjs/i18n release stable version
declare const defineI18nConfig: (fn: () => I18nOptions) => unknown

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'zh_CN',
  messages: {
    en_US: {
      language: 'Language',
      theme: 'Theme',
      home: 'Home',
      my: 'My',
      message: 'Message',
      setting: 'Setting',
    },
    zh_CN: {
      language: '语言',
      theme: '主题',
      home: '主页',
      my: '我的',
      message: '消息',
      setting: '设置',
    },
    ja_JP: {
      language: '言語',
      theme: 'テーマ',
      home: 'メインページ',
      my: '私の',
      message: 'メッセージ',
      setting: '設定',
    },
  },
}))
