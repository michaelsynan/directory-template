<script setup lang="ts">

</script>

<template>
  <main class="text-white min-h-screen">
    <SharedHero heading="Services" description="These are our services" />
    <div class="sticky top-10 bg-stone-900 backdrop-blur z-10 w-full p-4 bg-opacity-40">
      <ServicesNav />
    </div>
    <UContainer class="flex flex-col gap-16 md:gap-10 justify-center items-start w-full my-20">
      <div id="all-services" class=" flex flex-col gap-16 w-full">
        <div id="website-design" class="flex flex-row w-full justify-between">
          <h2>Website Design</h2>
          <p class="max-w-lg">Description for Website Design Description for Website Design Description for Website
            Design Description
            for Website Design Description for Website Design Description for Website Design Description for Website
            Design Description for Website Design</p>
        </div>
        <div id="development" class="flex flex-row w-full justify-between">
          <h2>Development</h2>
          <p class="max-w-lg">Description for Website Design Description for Website Design Description for Website
            Design Description
            for Website Design Description for Website Design Description for Website Design Description for Website
            Design Description for Website Design</p>
        </div>
        <div id="digital-marketing" class="flex flex-row w-full justify-between">
          <h2>Marketing</h2>
          <p class="max-w-lg">Description for Website Design Description for Website Design Description for Website
            Design Description
            for Website Design Description for Website Design Description for Website Design Description for Website
            Design Description for Website Design</p>
        </div>
        <div id="ai" class="flex flex-row w-full justify-between">
          <h2>AI and Automation</h2>
          <p class="max-w-lg">Description for Website Design Description for Website Design Description for Website
            Design Description
            for Website Design Description for Website Design Description for Website Design Description for Website
            Design Description for Website Design</p>
        </div>
      </div>
      <SharedGetInTouch />
    </UContainer>
  </main>
</template>

<style scoped></style>
