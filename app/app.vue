<template>
  <NavBar />
  <transition
    name="fade"
    mode="out-in"
  >
    <NuxtPage />
  </transition>
  <FooterWrapper />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
