<template>
  <div id="main-border" class="relative h-[90vh] w-screen overflow-hidden">
    <!-- Background image -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center"
      style="background-image: url('formwork-studios.jpg'); background-attachment: fixed;">
    </div>
    <!-- Black overlay -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
    <!-- Adjusted Gradient Strip -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-stone-950 to-stone-950">
    </div>
    <!-- Content -->
    <UContainer class="relative z-10 flex flex-col items-start justify-center h-full gap-4">
      <UBadge color="dino" variant="outline" class="font-bold border-none hidden">Let's Work</UBadge>
      <div class="font-bold flex flex-col gap-4">
        <h1 class="text-white text-6xl">From Design to Marketing</h1>
        <h1 class="text-6xl text-primary-500">We Build It</h1>
      </div>
      <p class="text-white text-xl mt-2 max-w-[60ch]">Cutting-edge design and development solutions crafted to take you
        from ideas to
        action.</p>
      <UButton color="primary" size="lg" class="mt-4 font-bold text-white" icon="i-heroicons-calendar-16-solid">
        Book
        My Free Strategy Session
      </UButton>
      <div>
        <GoogleReview />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
/* Custom gradient styles */
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 60%, #0c0a09 90%, #0c0a09 100%);
}
</style>
