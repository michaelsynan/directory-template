<script setup>
const cards = [
  { header: 'Elegant & Modern Design', content: 'We use cutting-edge technology and custom design systems to ensure our products are both visually appealing and highly functional, setting new industry standards.', buttonLabel: 'Learn More', buttonLink: 'https://link1.com', icon: 'i-heroicons-computer-desktop' },
  { header: 'Targeted Marketing', content: 'We use the latest systems and strategies to deliver ads to your ideal user, enhancing the precision and efficiency of your campaigns to boost conversion rates.', buttonLabel: 'Learn More', buttonLink: 'https://link2.com', icon: 'i-streamline-target' },
  { header: 'AI-Driven Solutions', content: 'Cut costs, increase leads, and optimize workflows with our AI Tool Kit, which leverages advanced analytics to streamline operations and drive business growth.', buttonLabel: 'Learn More', buttonLink: 'https://link3.com', icon: 'i-healthicons-artificial-intelligence' }
];
</script>

<template>
  <UContainer class="flex justify-center items-stretch gap-10 flex-col">
    <div class="flex flex-col items-center gap-8 justify-center pb-6">
      <h2 class="header">The Simple <span class="cool-underline font-bold header">Solutions</span> You're Looking For
      </h2>
      <p class="max-w-xl text-center text-stone-300">We help you cancel out the noise and focus on how to reach your
        goal as quickly
        and
        efficiently as possible.
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-center items-stretch gap-10">
      <UCard v-for="(card, index) in cards" :key="index" class="flex-1 basis-1/3 bg-transparent text-white mx-auto" :ui="{
        background: 'bg-white dark:bg-stone-900 dark:hover:bg-stone-800 transition-all',
        divide: 'divide-y divide-stone-200 dark:divide-stone-800 dark:hover:divide-stone-700 transition-all',
        ring: 'ring-1 ring-stone-200 dark:ring-stone-800 dark:hover:ring-dino-400 transition-all',
        rounded: 'rounded-lg',
      }">
        <template #header>
          <h3 class="h-8 p-2 rounded flex items-center gap-4 text-lg">
            <UIcon :name="card.icon" class="w-6 h-6" />
            {{ card.header }}
          </h3>
        </template>
        <div class="h-32 p-4 mb-4 break-words leading-relaxed text-stone-300">
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
