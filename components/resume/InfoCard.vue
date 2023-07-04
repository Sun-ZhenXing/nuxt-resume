<script setup lang="ts">
interface InfoCardItems {
  content: string
  icon?: string
  url?: string
}

const props = defineProps<{
  name: string
  padding?: string
  items?: InfoCardItems[]
}>()
</script>

<template>
  <div class="box-border w-full flex flex-col justify-center" :style="{ padding: `${props.padding || '1rem'}` }">
    <!-- avatar -->
    <div class="text-center">
      <div>
        <van-image round width="5rem" height="5rem" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </div>
      <div>
        <span class="text-5 font-600">{{ props.name }}</span>
      </div>
    </div>
    <!-- social media -->
    <div v-if="props.items" class="m-2 box-border pt-2">
      <div v-for="item in props.items" :key="item.content" class="m-2 flex items-center text-3.5">
        <Icon v-if="item.icon" :name="item.icon" size="20" class="pr-1" />
        <a v-if="item.url" :href="item.url" class="decoration-none" target="_blank">{{ item.content }}</a>
        <span v-else>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>
