<script setup lang="ts">
interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { name: "Sergio Uzrin", text: "Solid webdesigner, clearly has years of experience. Was up to date with current trends on functionality as well as design." },
  { name: "Jane Smith", text: "Michael has really helped with our marketing and advertising operations! We are running ads on meta, Amazon, and google which have led to increased revenues." },
  { name: "Chris Lee", text: "They were really informative and helpful, hard working and efficient." }
];
</script>

<template>
  <UContainer class="flex flex-wrap justify-center items-start py-20 mb-20">
    <HomeTestimonial v-for="(testimonial, index) in testimonials" :key="index" :name="testimonial.name"
      :text="testimonial.text" />
    <div class="mt-4">Read all reviews -></div>
  </UContainer>
</template>

<style scoped>
/* Tailwind CSS handles styling */
</style>
