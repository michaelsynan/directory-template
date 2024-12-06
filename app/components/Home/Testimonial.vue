<script setup lang="ts">

const props = defineProps<{
  name: string;
  text: string;
}>();
</script>

<template>
  <div class="px-6 max-w-sm rounded-lg shadow-md text-center flex-1 basis-1/3">
    <div class="w-full mb-8">
      <div class="w-24 h-24 flex items-center justify-center border border-stone-300 rounded-full mx-auto">
        <UIcon name="i-mdi-account" class="text-dino-400 h-12 w-12"></UIcon>
      </div>
    </div>
    <p class="text-base italic leading-relaxed">
      "{{ props.text }}"
    </p>
    <p class="text-lg font-bold mt-4">
      - {{ props.name }}
    </p>
  </div>
</template>

<style scoped></style>
