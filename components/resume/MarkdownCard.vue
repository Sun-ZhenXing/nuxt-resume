<script setup lang="ts">
const { data } = await useAsyncData('hello', () => queryContent('/hello').findOne())
</script>

<template>
  <div class="m-2 box-border w-full list-inside p-4 list-decimal!">
    <ContentRenderer :value="data!" />
  </div>
</template>
