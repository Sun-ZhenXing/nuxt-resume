import type { ConfigProviderThemeVars } from 'vant'
import { defaultSettings } from '../settings'

/**
 * @description: 控制 Vant 的主题变量
 */
export const useThemeVars = () => useState<ConfigProviderThemeVars>('themeVars', () => defaultSettings.themeVars)
