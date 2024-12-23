<template>
  <div id="main-border" class="relative h-[90vh] w-screen overflow-hidden">
    <!-- Background image -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-center"
      style="background-image: url('formwork-studios.jpg'); background-attachment: fixed;" />
    <!-- Black overlay -->
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60" />
    <!-- Gradient Strip -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-stone-950 to-stone-950" />
    <UContainer class="relative z-10 flex flex-col items-center justify-center h-full gap-4">
      <UBadge variant="outline" class="font-bold rounded-full border-none ">
        Your Home for Pilates Teacher Training
      </UBadge>
      <div class="font-bold flex flex-col gap-4">
        <h1 class="text-white text-5xl md:!text-7xl !leading-2 max-w-none text-center">
          A Place for All Pilates <br>
          <span class="!text-5xl md:!text-7xl text-dino-500 header">Teacher Trainers</span>
        </h1>
      </div>

      <SharedMainCTAButton />
      <div>
        <SharedSmallReviews />
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, transparent 60%, #0c0a09 90%, #0c0a09 100%);
}
</style>
