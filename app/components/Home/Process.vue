<script setup lang="ts"></script>

<template>
  <UContainer class="flex flex-col w-full justify-center items-center">
    <div class="flex flex-col gap-10 max-w-max">
      <h2>How Do I Get Started?</h2>
      <ul class="space-y-6 text-lg">
        <li class="flex  items-center bg-dino-600 p-2 rounded pr-6">
          <!-- Add justify-center for horizontal centering -->
          <UIcon name="i-tabler-circle-number-1-filled" class="w-8 h-8 mr-2" />
          <div>
            Free 30-minute consultation
          </div>
        </li>
        <li class="flex items-center bg-dino-600 p-2 rounded pr-6">
          <!-- Add justify-center for horizontal centering -->
          <UIcon name="i-tabler-circle-number-2-filled" class="w-8 h-8 mr-2 " />
          <div>
            If we're a good fit, we'll create a custom plan for you
          </div>
        </li>
        <li class="flex  items-center bg-dino-600 p-2 rounded pr-6">
          <!-- Add justify-center for horizontal centering -->
          <UIcon name="i-tabler-circle-number-3-filled" class="w-8 h-8 mr-2 " />
          <div>
            Rounds of reviews and feedback
          </div>
        </li>
      </ul>
      <UButton size="lg" icon="i-heroicons-calendar-16-solid" class="max-w-max font-bold">Book My Free Strategy Session
      </UButton>
    </div>
  </UContainer>
</template>


<style scoped></style>
