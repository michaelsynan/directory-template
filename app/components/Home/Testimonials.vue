<script setup lang="ts">
interface Testimonial {
  name: string;
  text: string;
}

const testimonials: Testimonial[] = [
  { name: "John Doe", text: "This is an amazing service!" },
  { name: "Jane Smith", text: "Absolutely wonderful experience!" },
  { name: "Chris Lee", text: "Highly recommend their expertise." }
];
</script>

<template>
  <UContainer class="flex flex-wrap justify-center items-center py-32">
    <HomeTestimonial v-for="(testimonial, index) in testimonials" :key="index" :name="testimonial.name"
      :text="testimonial.text" />
  </UContainer>
</template>

<style scoped>
/* Tailwind CSS handles styling */
</style>
