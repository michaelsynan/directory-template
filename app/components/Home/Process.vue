<script setup lang="ts"></script>

<template>
  <UContainer class="flex flex-row gap-10 w-full justify-center">
    <div class="flex flex-col gap-6">
      <h2>How Do I Get Started?</h2>

      <div class="flex flex-row gap-8 align-center items-center">
        <div class="flex flex-col gap-4">
          <NuxtImg src="/formwork-studios-happy-cafe.jpg" class="max-w-lg border-2 rounded" />

        </div>

        <div class="flex flex-col gap-10 max-w-max">

          <p class="max-w-[50ch] hidden">Our process is simple. It involves 3 easy steps to get your project up and
            running.
          </p>
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
          <UButton size="lg" icon="i-heroicons-calendar-16-solid" class="max-w-max font-bold">Book My Free Strategy
            Session
          </UButton>
        </div>
      </div>
    </div>
  </UContainer>
</template>


<style scoped></style>
