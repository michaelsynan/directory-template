<script setup lang="ts">
const items = [
  '/video-photography-website.webp',
  '/dashboard.webp',
  '/hero-image.webp',
  '/facial-serum-website.webp',
  '/daily-grind.webp',
  '/mobile-app.webp',
  '/jazz.webp',
  '/coding-nurse.webp',
  '/yoga-pilates.webp',
  '/michael.webp',
]
</script>

<template>
  <div class="w-full">
    <UCarousel
      ref="carouselRef"
      v-slot="{ item }"
      :items="items"
    >
      <img
        :src="item"
        height="400"
        draggable="false"
        class="h-32 sm:h-44 md:h-64 border border-stone-500"
      >
    </UCarousel>
  </div>
</template>
