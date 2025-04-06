<template>
  <footer class="w-full py-6 px-4 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} Paweł Kucia. All rights reserved.
      </p>
      <div class="mt-4 md:mt-0">
        <a 
          href="mailto:contact@pawelkucia.com" 
          class="text-sm text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-magenta transition-colors"
        >
          contact@pawelkucia.com
        </a>
      </div>
    </div>
  </footer>
</template>