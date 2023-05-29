/**
 * 主题颜色模式
 */
import type { ConfigProviderTheme } from 'vant'
import { storeToRefs } from 'pinia'

export default defineNuxtPlugin((_) => {
  // 响应式获取系统偏好
  const colorMode = useColorMode()
  const appStore = useAppStore()

  // 响应式获取用户偏好设置
  const { isDarkTheme, isUsingSystemDarkMode } = storeToRefs(appStore)
  return {
    provide: {
      darkTheme: computed<ConfigProviderTheme>(() => {
        if (isUsingSystemDarkMode.value) {
          // 如果用户设置了跟随系统，则返回系统偏好
          // 如果没有在预设中，则默认为浅色
          if (['dark', 'light'].includes(colorMode.value))
            return colorMode.value as ConfigProviderTheme
          else
            return 'light'
        }
        else {
          // 否则返回用户设置的偏好
          return isDarkTheme.value ? 'dark' : 'light'
        }
      }),
      toggleColorMode() {
        if (isUsingSystemDarkMode.value) {
          isDarkTheme.value = false
          isUsingSystemDarkMode.value = false
        } else {
          if (isDarkTheme.value) {
            isDarkTheme.value = false
            isUsingSystemDarkMode.value = true
          } else {
            isDarkTheme.value = true
          }
        }
      },
    },
  }
})
