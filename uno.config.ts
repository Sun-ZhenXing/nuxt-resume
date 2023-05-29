import {
  defineConfig,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [],
  presets: [
    presetUno(),
    presetTypography(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
