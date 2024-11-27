<script setup lang="ts">
const items = [{
  label: 'What services do you offer?',
  defaultOpen: true,
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'How does the design process work?',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Do you perform all work in-house or do you outsource some tasks?',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'What is your pricing model?',
  content: 'We quote each project according to its own specifications. Basic websites start at $1,500, business websites range from $3,000 to $10,000, e-commerce sites from $5,000 to $20,000, and custom JavaScript applications from $10,000 to $50,000. For quotes on mobile apps, please contact us directly.'
}, {
  label: 'How does your agency utilize AI technology in its projects?',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}, {
  label: 'Utilities',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Praesent ut sem nec arcu pellentesque aliquet. Duis dapibus diam vel metus tempus vulputate.'
}]
</script>

<template>
  <UContainer class="flex justify-center space-x-10 py-10 mb-20 flex-col max-w-4xl items-center">
    <h2 class="text-4xl my-8 font-bold">Frequently Asked Questions</h2>
    <UAccordion :items="items" size="xl" variant="soft" />
  </UContainer>
</template>
