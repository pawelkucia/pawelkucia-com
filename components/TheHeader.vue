<template>
  <header class="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
    <div 
      :class="[
        'container mx-auto px-4 py-2 mt-2 transition-colors transition-shadow duration-300',
        isScrolled || isOpen ? 'bg-primary-light/40 dark:bg-primary-dark/40 backdrop-blur-md shadow-lg' : 'bg-transparent', 
        isOpen ? 'rounded-2xl' :'rounded-full'
      ]"
    >
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <span class="text-pink-700 text-3xl font-bold">{PK}</span>
          <div>
            <h1 class="font-medium gradient-text">Paweł Kucia</h1>
            <p class="text-sm text-gray-600 dark:text-pink-100">Software Engineer</p>
          </div>
        </div>
        <div class="flex items-center gap-4">
          <Navigation />
          <!-- Mobile Menu -->
          <div class="md:hidden flex items-center gap-4">
            
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
            
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
            <div 
              v-show="isOpen"
              class="mx-0 px-4"
            >
              <nav class="">
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
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Navigation from '~/components/Navigation.vue'

const colorMode = useColorMode()
const isOpen = ref(false)
const isScrolled = ref(false)

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'Tech stack', id: 'tech-stack' },
  { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const handleClick = (sectionId: string) => {
  isOpen.value = false
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 100
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(
    to right,
    #be185d,
    #be185d,
    #be185d
  );
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
</style>