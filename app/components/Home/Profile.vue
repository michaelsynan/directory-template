<template>
  <div class="flex flex-col items-center justify-center p-6 m-2">
    <div class="text-2xl font-bold mb-2">{{ name }}</div>
    <p class="text-gray-600 text-center">{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
// Define props the component accepts
defineProps<{
  name: string;
  text: string;
}>();
</script>

<style scoped>
/* Scoped styles for this component */
</style>
