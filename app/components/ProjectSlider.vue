<template>
  <div id="container" class="max-w-5xl mx-auto p-5">
    <swiper-container :slides-per-view="3" :speed="500" :css-mode="true" :space-between="40" :loop="true"
      :effect="'fade'" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }">
      <swiper-slide class="" style="background-color: #dc6acf">
        <strong class="text-5xl text-white z-10">NUXT</strong>
      </swiper-slide>
      <swiper-slide class="" style="background-color: #4a90e2">
        <strong class="text-5xl text-white z-10">IMAGE</strong>
      </swiper-slide>
      <swiper-slide class="" style="background-color: #7b4397">
        <strong class="text-5xl text-white z-10">SUPER COOL CAROUSEL</strong>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style scoped>
.swiper-pagination-bullet-active {
  background: #810867 !important;
}

.swiper {
  width: 100%;
  height: 50vh;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .swiper {
    height: 25vh;
  }
}

.swiper-slide {
  /* text-align: center;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.swiper-pagination-bullet-active {
  background: red !important;
}
</style>

<script setup lang="ts">

</script>
