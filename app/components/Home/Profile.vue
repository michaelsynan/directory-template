<script setup lang="ts">
// Define props the component accepts
const props = defineProps<{
  name: string;
  text: string;
  image: string;
}>();
</script>

<template>
  <div class="flex flex-col items-center justify-center p-6 m-2 gap-4">
    <NuxtImg :src="props.image" class="rounded" />
    <div class="text-2xl font-bold">{{ name }}</div>
    <p class="text-stone-500 text-center max-w-md">{{ text }}</p>
  </div>
</template>

<style scoped>
/* Scoped styles for this component */
</style>
