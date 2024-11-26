<template>
  <div id="main-border" class="relative h-screen w-screen overflow-hidden">
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center "
      style="background-image: url('formwork-studios.jpg'); background-attachment: fixed;"></div>
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
    <UContainer class="relative z-10 flex flex-col items-start justify-center h-full gap-4">
      <UBadge color="dino" variant="outline" class="font-bold border-none hidden">Let's Work</UBadge>
      <div class="font-bold">
        <h1 class="text-white text-6xl">From Design to Marketing</h1>
        <h1 class="text-6xl text-primary-500">We Build It</h1>
      </div>
      <p class="text-white text-xl mt-2">Cutting-edge design and development solutions.</p>
      <UButton color="primary" size="lg" class="mt-4 font-bold text-white" icon="i-heroicons-rocket-launch-16-solid">
        Book
        My Free Strategy Session</UButton>
      <div>
        <GoogleReview />
      </div>
    </UContainer>

  </div>
</template>

<style scoped></style>
