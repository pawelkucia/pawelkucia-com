<template>
  <div class="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-gray-100 flex flex-col transition-colors duration-300">
 
    <div class="flex-grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '~/components/Footer.vue'
</script>

<style>
  html {
    scroll-behavior: smooth;
  }
</style>