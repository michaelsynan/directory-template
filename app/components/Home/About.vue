<script setup>
const cards = [
  { header: 'Elegant & Modern Design', content: 'We use cutting-edge technology and custom design systems to ensure our products are both visually appealing and highly functional, setting new industry standards.', buttonLabel: 'Learn More', buttonLink: 'https://link1.com', icon: 'i-heroicons-computer-desktop' },
  { header: 'Targeted Marketing', content: 'We use the latest systems and strategies to deliver ads to your ideal user, enhancing the precision and efficiency of your campaigns to boost conversion rates.', buttonLabel: 'Learn More', buttonLink: 'https://link2.com', icon: 'i-streamline-target' },
  { header: 'AI-Driven Solutions', content: 'Cut costs, increase leads, and optimize workflows with our AI Tool Kit, which leverages advanced analytics to streamline operations and drive business growth.', buttonLabel: 'Learn More', buttonLink: 'https://link3.com', icon: 'i-healthicons-artificial-intelligence' }
];
</script>

<template>
  <UContainer class="flex justify-center items-stretch space-x-10 py-10 mb-20 flex-col">
    <div class="flex justify-center pb-16">
      <h2 class="text-4xl text-white font-bold">The Solutions You're Looking For</h2>
    </div>
    <div class="flex flex-row justify-center items-stretch space-x-10">
      <UCard v-for="(card, index) in cards" :key="index" class="flex-1 basis-1/3 bg-transparent text-white" :ui="{
        background: 'bg-white dark:bg-stone-900 dark:hover:bg-stone-800 transition-all',
        divide: 'divide-y divide-stone-200 dark:divide-stone-800 dark:hover:divide-stone-700 transition-all',
        ring: 'ring-1 ring-stone-200 dark:ring-stone-800 dark:hover:ring-juju-400 transition-all',
        rounded: 'rounded-lg',
      }">
        <template #header>
          <h2 class="h-8 p-2 rounded flex items-center gap-4 text-lg font-bold">
            <UIcon :name="card.icon" class="w-6 h-6" />
            {{ card.header }}
          </h2>
        </template>
        <div class="h-32 p-4 mb-4 break-words">
          {{ card.content }}
        </div>
        <!-- <template #footer>
          <div class="h-8 p-2 rounded flex justify-between items-center">
            <UButton :to="card.buttonLink" target="_blank" color="primary" variant="solid">
              {{ card.buttonLabel }}
            </UButton>
          </div>
        </template> -->
      </UCard>
    </div>
  </UContainer>
</template>
