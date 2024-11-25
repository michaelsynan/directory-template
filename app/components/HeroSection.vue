<template>
  <div id="main-border" class="relative h-screen w-screen overflow-hidden">
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center "
      style="background-image: url('formwork-studios.jpg'); background-attachment: fixed;"></div>
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"></div>
    <UContainer class="relative z-10 flex flex-col items-start justify-center h-full gap-4">
      <UBadge color="green" variant="outline">Let's Work</UBadge>
      <h1 class="text-white text-6xl font-bold">Welcome to Formwork Studios</h1>

      <p class="text-white text-xl mt-2">Cutting-edge design and development solutions.</p>
      <UButton color="primary" size="lg" class="mt-4">Book My Free Strategy Session</UButton>
    </UContainer>
  </div>
</template>

<style scoped></style>
