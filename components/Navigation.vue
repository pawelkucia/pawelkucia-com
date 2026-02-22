<template>
  <nav class="hidden md:flex items-center gap-6">
    <template v-for="item in menuItems" :key="item.id || item.path">
      <NuxtLink
        v-if="item.path"
        :to="item.path"
        class="text-gray-900 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-600 transition-colors"
      >
        {{ item.name }}
      </NuxtLink>
      <a
        v-else
        :href="`/#${item.id}`"
        class="text-gray-900 dark:text-gray-100 hover:text-orange-600 dark:hover:text-orange-600 transition-colors"
        @click="handleClick(item.id)"
      >
        {{ item.name }}
      </a>
    </template>
    <button 
      @click="toggleColorMode" 
      class="h-[20px] p-0 rounded-full bg-transparent dark:bg-transparent hover:bg-transparent dark:hover:bg-transparent transition-colors"
    >
      <font-awesome-icon 
        :icon="['far', colorMode.value === 'dark' ? 'sun' : 'moon']" 
        class="text-xl text-orange-600 hover:text-orange-500 dark:hover:text-orange-500 transition-colors"
      />
    </button>
  </nav>
</template>

<script setup>
const colorMode = useColorMode()
const { menuItems } = useMenuItems()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}

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