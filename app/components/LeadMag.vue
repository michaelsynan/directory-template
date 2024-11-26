<script setup lang="ts"></script>

<template>
  <UContainer class="flex justify-center items-center space-x-20 py-32">
    <div class="text-white flex flex-col gap-4">
      <h2 class="text-4xl font-bold flex flex-col gap-1.5 mb-4">
        <div>Choosing the Right</div>
        <div>Technology isn't Easy</div>
      </h2>

      <!-- Bullet Points Section -->
      <ul class="space-y-3 text-lg">
        <li class="flex items-center">
          <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5 mr-2 text-dino-500"></UIcon>
          <span>Too many high-cost subscriptions</span>
        </li>
        <li class="flex items-center">
          <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5 mr-2 text-dino-500"></UIcon>
          <span>Unclear way to measure results</span>
        </li>
        <li class="flex items-center">
          <UIcon name="i-heroicons-exclamation-circle" class="w-5 h-5 mr-2 text-dino-500"></UIcon>
          <span>Unreliable & untrustworthy marketers</span>
        </li>
      </ul>
    </div>

    <div class="">
      <NuxtImg class="max-w-lg" src="/mock-up.png" />
    </div>
  </UContainer>
</template>

<style scoped></style>
