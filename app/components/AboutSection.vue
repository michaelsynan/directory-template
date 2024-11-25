<script setup>

const cards = [
  { header: 'Header 1', content: 'This is content for Card 1', buttonLabel: 'Click Me 1', buttonLink: 'https://link1.com' },
  { header: 'Header 2', content: 'This is content for Card 2', buttonLabel: 'Click Me 2', buttonLink: 'https://link2.com' },
  { header: 'Header 3', content: 'This is content for Card 3', buttonLabel: 'Click Me 3', buttonLink: 'https://link3.com' }
];
</script>

<template>
  <UContainer class="flex justify-center items-center space-x-10 py-10">
    <UCard v-for="(card, index) in cards" :key="index"
      class="flex-auto bg-transparent text-white border-2 hover:shadow-lg transition-all hover:shadow-fuchsia-800">
      <template #header>
        <div class="h-8 p-2 rounded flex items-center justify-between">
          {{ card.header }}
          <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
        </div>
      </template>

      <div class="h-32 p-4">
        {{ card.content }}
      </div>

      <template #footer>
        <div class="h-8 p-2 rounded flex justify-between items-center">
          <UButton :to="card.buttonLink" target="_blank" color="primary" variant="solid">
            {{ card.buttonLabel }}
          </UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>
