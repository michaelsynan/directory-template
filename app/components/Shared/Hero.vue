<script setup lang="ts">
import { withDefaults } from 'vue'

const props = withDefaults(defineProps<{
  heading: string,
  description: string,
  image?: string
}>(), {
  image: '/manhattan-skyline-nyc.jpg'
})
</script>

<template>
  <div :style="{ backgroundImage: `url(${props.image})`, backgroundPosition: 'bottom center' }"
    class="py-40 bg-cover bg-center bg-no-repeat">
    <UContainer class="flex flex-col gap-10">
      <h1 class="text-5xl">{{ props.heading }}</h1>
      <p class="text-lg">{{ props.description }}</p>
    </UContainer>
  </div>
</template>
