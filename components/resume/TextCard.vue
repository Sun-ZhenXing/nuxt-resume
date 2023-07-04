<script setup lang="ts">
import type { StyleValue } from 'vue'

const props = defineProps<{
  title: string
  content: string
  cardStyle?: StyleValue
  titleStyle?: StyleValue
  contentStyle?: StyleValue
}>()
</script>

<template>
  <div class="box-border w-full" :style="props.cardStyle">
    <h2 :style="props.titleStyle">{{ title }}</h2>
    <div :style="props.contentStyle">{{ content }}</div>
  </div>
</template>
