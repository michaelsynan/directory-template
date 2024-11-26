<script setup lang="ts">
const testimonials = [
  { name: 'John Doe', quote: 'This service was amazing! Highly recommend it to anyone.' },
  { name: 'Jane Smith', quote: 'I had a wonderful experience. Will definitely use this again!' },
  { name: 'Alice Johnson', quote: 'Absolutely fantastic! Exceeded all my expectations.' },
  { name: 'Robert Brown', quote: 'A truly outstanding experience. Thank you!' },
  { name: 'Emily Davis', quote: 'Great service and friendly staff. Highly appreciated.' },
  { name: 'Michael Wilson', quote: 'Five stars! Couldn’t have asked for better.' }
];
</script>

<template>
  <UCarousel v-slot="{ item }" :items="testimonials" class="gap-10 my-20">
    <div class="testimonial text-white p-8 max-w-md">
      <p class="quote">"{{ item.quote }}"</p>
      <p class="name">- {{ item.name }}</p>
    </div>
  </UCarousel>
</template>

<style scoped>
.testimonial {
  text-align: center;
  font-family: Arial, sans-serif;
  padding: 20px;
}

.quote {
  font-size: 1.2em;
  font-style: italic;
  margin-bottom: 10px;
}

.name {
  font-size: 1em;
  font-weight: bold;
}
</style>
