<script setup lang="ts">

</script>

<template>
  <main class="text-white min-h-screen">
    <SharedHero heading="Services" description="These are our services" />
    <div class="sticky top-10 bg-stone-900 backdrop-blur z-10 w-full p-4 bg-opacity-40">
      <ServicesNav />
    </div>
    <UContainer class="flex flex-col gap-16 md:gap-10 justify-center items-start w-full">
      <div id="all-services" class="mt-10 flex flex-col gap-10">
        <div id="website-design">
          <h2>Website Design</h2>
          <p>Description for Website Design</p>
        </div>
        <div id="development">
          <h2>Development</h2>
          <p>Description for Development</p>
        </div>
        <div id="digital-marketing">
          <h2>Marketing</h2>
          <p>Description for Marketing</p>
        </div>
        <div id="ai">
          <h2>AI and Automation</h2>
          <p>Description for AI and Automation</p>
        </div>
      </div>
    </UContainer>
  </main>
</template>

<style scoped></style>
