/**
 * 是否打开系统设置
 */
export const useShowSetting = () => useState<boolean>('showSetting', () => false)

/**
 * 当前系统的语言
 */
export { useCurrentLang } from 'vant'
