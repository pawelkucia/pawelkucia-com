<template>
  <footer class="w-full py-6 px-4 border-t border-gray-200 dark:border-gray-800">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm text-gray-600 dark:text-gray-400">
        © {{ new Date().getFullYear() }} Paweł Kucia. All rights reserved.
      </p>
      <div class="mt-4 md:mt-0">
        <span class="text-sm text-gray-600 dark:text-gray-400">Supported by:</span>
        <a 
          href="https://top4all.pl"
          target="_blank"
          rel="noopener noreferrer"
          class="text-sm text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-600 transition-colors"
        >
          TOP4ALL
        </a>
      </div>
    </div>
  </footer>
</template>