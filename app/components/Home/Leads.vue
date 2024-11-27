<script setup lang="ts"></script>

<template>
  <UContainer class="flex justify-center items-center space-x-40 py-32">
    <div class="text-white flex flex-col gap-2 max-w-md">
      <h2 class="text-4xl font-bold flex flex-col gap-1.5 mb-4">
        <div>Download Our Free Guide to Using AI and Automation to Build your Business</div>
      </h2>
      <div class="flex flex-col gap-0">
        <div class="flex flex-col items-start w-full">
          <label class="mb-1 text-sm font-medium text-gray-700">Email Address</label>
          <UInput class="w-full" size="lg" type="text" color="primary" variant="outline"
            placeholder="e.g. bill.gates@microsoft.com">
          </UInput>
        </div>
        <div class="py-2">
          <UButton icon="i-mdi-download" size="lg" class="my-2">Get My Free Guide
          </UButton>
        </div>
      </div>
      <div class="flex items-center text-sm text-stone-500 gap-1">
        <UIcon name="i-material-symbols:asterisk-rounded" class="h-4 w-4" />
        <span>We do not share your personal information</span>
      </div>
    </div>
    <div class="">
      <NuxtImg class="max-w-lg" src="/mock-up.png" />
    </div>
  </UContainer>
</template>
