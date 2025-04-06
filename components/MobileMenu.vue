<template>
  <div class="md:hidden flex items-center gap-4">
    <!-- Hamburger Button -->
    <button 
      @click="isOpen = !isOpen"
      class="text-gray-900 dark:text-pink-100 p-2"
      aria-label="Toggle menu"
    >
      <font-awesome-icon 
        :icon="['fas', isOpen ? 'times' : 'bars']" 
        class="text-2xl"
      />
    </button>
    <button 
      @click="toggleColorMode" 
      class="text-gray-900 dark:text-pink-100 p-2"
      aria-label="Toggle theme"
    >
      <font-awesome-icon 
        :icon="['far', colorMode.value === 'dark' ? 'sun' : 'moon']" 
        class="text-2xl"
      />
    </button>

    <!-- Mobile Menu -->
    <div 
      v-show="isOpen"
      class="absolute top-full left-0 right-0 bg-primary-light/40 dark:bg-primary-dark/40 backdrop-blur-md py-4 shadow-lg"
    >
      <nav class="container mx-auto px-4">
        <div class="flex flex-col space-y-4">
          <a 
            v-for="item in menuItems" 
            :key="item.id"
            :href="`#${item.id}`"
            class="text-gray-900 dark:text-pink-100 hover:text-pink-700 transition-colors text-lg"
            @click="handleClick(item.id)"
          >
            {{ item.name }}
          </a>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const colorMode = useColorMode()
const isOpen = ref(false);

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'Tech stack', id: 'tech-stack' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' }
];

const handleClick = (sectionId: string) => {
  isOpen.value = false;
  const element = document.getElementById(sectionId);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
</script>