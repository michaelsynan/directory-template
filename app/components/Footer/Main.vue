<script setup lang="ts"></script>

<template>
  <div id="footer" class-bak="border-t border-stone-500">
    <UContainer class="text-white pt-12 pb-8 flex flex-col items-center gap-10 justify-between">
      <div>
        <NuxtImg src="/formwork-studios-logo-text.png" height="30" fit="cover" alt="Formwork Studios" />
      </div>
      <FooterSocials />
      <div class="flex flex-col items-center gap-1">
        <div>
          <NuxtLink to="/tos">Privacy Policy</NuxtLink> | <NuxtLink to="/tos">Terms of Service</NuxtLink>
        </div>
        <div>
          &copy; {{ new Date().getFullYear() }} Formwork Studios. All rights reserved.
        </div>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
/* #footer {
  background-image: url('data:image/svg+xml;charset=UTF-8,<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="5" height="5" fill="%23f5f5f5" fill-opacity="0.1" /><rect x="5" y="5" width="5" height="5" fill="%23f5f5f5" fill-opacity="0.1" /></svg>');
  background-size: 80px 80px;
} */
</style>
