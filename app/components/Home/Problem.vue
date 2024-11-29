<script setup lang="ts"></script>

<template>
  <UContainer class="flex justify-center items-start space-x-20">
    <div class="text-white flex flex-col gap-4">
      <h2 class="flex flex-col gap-1.5 mb-4">
        <div class="leading-normal">Choosing the Right<br />
          Technology isn't Easy</div>
      </h2>

      <!-- Bullet Points Section -->
      <ul class="space-y-3 text-lg">
        <li class="flex items-center">
          <UIcon name="i-mdi-alert-circle" class="w-6 h-6 mr-2 text-dino-400"></UIcon>
          <span>Too many high-cost subscriptions</span>
        </li>
        <li class="flex items-center">
          <UIcon name="i-mdi-alert-circle" class="w-6 h-6 mr-2 text-dino-400"></UIcon>
          <span>Unclear way to measure results</span>
        </li>
        <li class="flex items-center">
          <UIcon name="i-mdi-alert-circle" class="w-6 h-6 mr-2 text-dino-400"></UIcon>
          <span>Unreliable & untrustworthy marketers</span>
        </li>
      </ul>
    </div>

    <div class="">
      <NuxtImg class="max-w-xl rounded-2xl border-2 border-stone-200" src="/nyc-subway-n-train.png" />
    </div>
  </UContainer>
</template>

<style scoped></style>
