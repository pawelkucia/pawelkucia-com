<template>
  <nav class="hidden md:flex items-center gap-6">
    <a 
      v-for="item in menuItems" 
      :key="item.id"
      :href="`#${item.id}`"
      class="text-gray-900 dark:text-pink-100 hover:text-pink-700 transition-colors"
      @click="handleClick(item.id)"
    >
      {{ item.name }}
    </a>
    <button 
      @click="toggleColorMode" 
      class="p-2 rounded-full bg-gray-100 dark:bg-pink-900/30 hover:bg-gray-200 dark:hover:bg-pink-900/50 transition-colors"
    >
      <font-awesome-icon 
        :icon="['far', colorMode.value === 'dark' ? 'sun' : 'moon']" 
        class="text-xl text-pink-700"
      />
    </button>
  </nav>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

const menuItems = [
  { name: 'Home', id: 'home' },
  { name: 'Tech stack', id: 'tech-stack' },
  // { name: 'Experience', id: 'experience' },
  { name: 'Contact', id: 'contact' }
]

const handleClick = (sectionId) => {
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
</script>