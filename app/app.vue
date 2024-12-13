<template>
  <div id="page-wrapper" class="flex flex-col min-h-screen">
    <NavBar />
    <transition name="fade" mode="out-in">
      <NuxtPage class="flex-grow" />
    </transition>
    <FooterWrapper />
  </div>
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
