<template>
  <main class="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white">
    <TheHeader />
    <!-- Content wrapper with padding for fixed header -->
    <div class="pt-28">
      <!-- Hero Section -->
      <section id="home" class="container mx-auto px-4 pt-0 pb-20 md:pt-20">
        <div class="flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div class="max-w-2xl">
            <div class="inline-block px-4 py-2 bg-gray-200 dark:bg-blue-900/30 rounded-full mb-4">
              <span class="text-gray-600 dark:text-blue-100">Software Engineer</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-black dark:text-white">Pawel Kucia</h1>
            <p ref="typingContainer" class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 typing-animation">
              <span ref="typedText"></span><span class="cursor">|</span>
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
              <a 
                href="#tech-stack" 
                class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                @click.prevent="scrollToSection('tech-stack')"
              >
                Show tech stack
              </a>
              <a 
                href="#contact" 
                class="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                @click.prevent="scrollToSection('contact')"
              >
                Contact Me
              </a>
            </div>
            <div class="flex gap-6 mt-8 justify-center md:justify-start">
              <a v-for="social in socialLinks" 
                 :key="social.name"
                 :href="social.url"
                 :title="social.name"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-600 transition-colors">
                <font-awesome-icon :icon="['fab', social.icon]" class="text-2xl" />
              </a>
            </div>
          </div>
          <div class="flex-shrink-0 relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-gray-100 dark:bg-blue-900/30 flex items-center justify-center">
            <img 
              src="/images/pawelkucia.jpg" 
              alt="Paweł Kucia"  
              class="w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <TechStack />

      <!-- Experience Section -->
      <Experience />

      <!-- Testimonials Section -->
      <Testimonials />

      <!-- Contact Section -->
      <Contact />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHeader from '~/components/TheHeader.vue'
import TechStack from '~/components/sections/TechStack.vue'
import Experience from '~/components/sections/Experience.vue'
import Testimonials from '~/components/sections/Testimonials.vue'
import Contact from '~/components/sections/Contact.vue'

const typedText = ref(null)
const typingContainer = ref(null)
let hasStartedTyping = false

const text = "Full Stack Engineer passionate about creating beautiful and functional web applications, specializing in modern web technologies and cloud solutions."
let currentCharIndex = 0

const typeText = () => {
  if (currentCharIndex < text.length && typedText.value) {
    typedText.value.textContent = text.substring(0, currentCharIndex + 1)
    currentCharIndex++
    setTimeout(typeText, 50) // Adjust typing speed here
  }
}

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 100 // Adjust this value based on your header height
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  // Create intersection observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasStartedTyping) {
        hasStartedTyping = true
        typeText()
        observer.disconnect() // Stop observing once animation starts
      }
    })
  }, {
    threshold: 0.5 // Start animation when element is 50% visible
  })

  // Start observing the typing container
  if (typingContainer.value) {
    observer.observe(typingContainer.value)
  }

  // Add smooth scroll behavior to the document
  document.documentElement.style.scrollBehavior = 'smooth'
})

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

<style>
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.cursor {
  animation: blink 1s step-end infinite;
}

.typing-animation {
  min-height: 3.5rem;
}

.svg-inline--fa {
  display: inline-block;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>