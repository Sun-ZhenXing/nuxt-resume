import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => {
    return {
      isDarkTheme: false,
      isUsingSystemDarkMode: true,
    }
  },
  actions: {
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
