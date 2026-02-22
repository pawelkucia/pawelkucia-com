<template>
  <header class="fixed top-0 left-0 right-0 z-40 transition-all duration-300">
    <div 
      class="container mx-auto px-4 py-0 mt-2"
    >
      <div class="flex justify-between items-center">
        <div :class="['flex items-center gap-2 transition-all duration-300',
isScrolled || isOpen ? 'px-4 bg-primary-light/40 dark:bg-primary-dark/30 backdrop-blur-md shadow-lg dark:shadow-blue-500/30' : 'bg-transparent', 
        isOpen ? 'rounded-2xl' :'rounded-full'
        ]">
          <span class="text-black dark:text-white text-3xl font-bold">PK.</span>
        </div>
        <div :class="['py-2 flex items-center gap-4 transition-all duration-300',
          isScrolled || isOpen ? 'px-4 bg-primary-light/40 dark:bg-primary-dark/30 backdrop-blur-md shadow-lg dark:shadow-blue-500/30' : 'bg-transparent', 
        isOpen ? 'rounded-2xl' :'rounded-full'
        ]">
          <Navigation />
          <!-- Mobile Menu -->
          <div class="md:hidden flex items-center gap-4">
            
            <button 
              @click="toggleColorMode" 
              class="p-0 h-[24px]"
              aria-label="Toggle theme"
            >
              <font-awesome-icon 
                :icon="['far', colorMode.value === 'dark' ? 'sun' : 'moon']" 
                class="text-2xl text-orange-600 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
              />
            </button>
<!-- Hamburger Button -->
            <button 
              @click="isOpen = !isOpen"
              class="p-0 w-[22px] h-[24px]"
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
              class="w-[200px] float-right mt-4 p-4 px-4 bg-primary-light/40 dark:bg-primary-dark/40 backdrop-blur-md shadow-lg dark:shadow-blue-500/30 rounded-2xl"
            >
              <nav class="">
                <div class="flex flex-col space-y-4">
                  <a
                    v-for="item in menuItems"
                    :key="item.id"
                    :href="`/#${item.id}`"
                    class="text-gray-900 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-600 transition-colors text-lg text-right"
                    @click="handleClick(item.id)"
                  >
                    {{ item.name }}
                  </a>
                  <NuxtLink
                    to="/blog"
                    class="text-gray-900 dark:text-gray-200 hover:text-orange-600 dark:hover:text-orange-600 transition-colors text-lg text-right"
                    @click="isOpen = false"
                  >
                    Blog
                  </NuxtLink>
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
const { menuItems } = useMenuItems()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

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