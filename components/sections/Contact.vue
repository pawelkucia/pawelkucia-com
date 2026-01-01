<template>
  <section id="contact" class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-semibold mb-2 text-black dark:text-white">Contact</h2>
    <p class="text-lg mb-10 text-gray-700 dark:text-gray-300 max-w-3xl">
      Feel free to reach out to me through any of the following platforms:
    </p>
    <div class="flex flex-col items-center space-y-8">
      <div class="flex gap-8 mb-8">
        <a v-for="social in socialLinks" 
           :key="social.name"
           :href="social.url"
           :title="social.name"
           target="_blank"
           rel="noopener noreferrer"
           class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-600 transition-colors">
          <font-awesome-icon :icon="['fab', social.icon]" class="text-4xl" />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const socialLinks = [
  {
    name: 'GitHub',
    icon: 'github',
    url: 'https://github.com/pawelkucia'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://linkedin.com/in/pawelkucia'
  },
  {
    name: 'X (Twitter)',
    icon: 'twitter',
    url: 'https://x.com/pawelkucia'
  },
  {
    name: 'Instagram',
    icon: 'instagram',
    url: 'https://instagram.com/pawelkucia'
  },
  {
    name: 'Facebook',
    icon: 'facebook',
    url: 'https://facebook.com/pawelkucia.dev'
  }
]
</script>
