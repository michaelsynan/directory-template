<script setup lang="ts">
// Define props the component accepts
const props = defineProps<{
  name: string;
  text: string;
  image: string;
  socials?: string;
}>();
</script>

<template>
  <div class="flex flex-row p-6 m-2 gap-4">
    <NuxtImg :src="props.image" class="rounded" />
    <div class="max-w-max flex flex-col gap-4">
      <div class="text-2xl font-bold">{{ name }}</div>
      <p class="text-stone-500">{{ text }}</p>
      <slot>
        <p>This is some text for the slot</p>
      </slot>
    </div>
  </div>
</template>

<style scoped>
/* Scoped styles for this component */
</style>
