<script setup>
import { ref } from "vue";

const result = await useGoogleReviews();
const message = ref(result.value);
watchEffect(() => {
  message.value = result.value;
});
</script>
<template>
  <div class="flex flex-row gap-2">
    <a href="https://www.google.com/search?q=Formwork+Studios&stick=H4sIAAAAAAAA_-NgU1I1qLCwTDZJSUtLMUoxMDYwNDG0MqgwtDBLsUgxNUhNNk1KMk0zXsQq4JZflFueX5StEFxSmpKZXwwANBtbCTwAAAA&hl=en&mat=Ccyhck5Wp436ElYBqiIDwhxM64kobhmFj4v7iXTUWkd3eDDwgVmkH6qHswra997kJbSx4VaIouIdKFnFP0IdiCFMD456s6mciBTTN5LfDXJ4-1scInNgINR1BRHqcaePAw&authuser=0"
      target="_blank" class="flex items-center gap-2 bg-google-blue-500 p-2 rounded-lg">
      <UIcon name="i-logos-google-icon" class="w-5 h-5" />
      <div class="text-white">100+ Google Reviews</div>
      <div>DATA {{ result }}</div>
    </a>
  </div>
</template>

<style scoped></style>
