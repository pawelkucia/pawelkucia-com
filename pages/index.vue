<template>
  <main class="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white">
    <TheHeader />
    <!-- Content wrapper with padding for fixed header -->
    <div class="pt-28">
      <!-- Hero Section -->
      <section id="home" class="container mx-auto px-4 py-20">
        <div class="flex flex-col-reverse md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div class="max-w-2xl">
            <div class="inline-block px-4 py-2 bg-gray-100 dark:bg-pink-900/30 rounded-full mb-4">
              <span class="text-gray-600 dark:text-pink-100">Software Engineer</span>
            </div>
            <h1 class="text-4xl md:text-6xl font-bold mb-6 text-pink-700">Paweł Kucia</h1>
            <p ref="typingContainer" class="text-lg md:text-xl text-gray-600 dark:text-pink-100 mb-8 typing-animation">
              <span ref="typedText"></span><span class="cursor">|</span>
            </p>
            <div class="flex gap-4 justify-center md:justify-start">
              <a 
                href="#tech-stack" 
                class="px-6 py-3 bg-pink-700 text-white rounded-lg hover:bg-pink-600 transition-colors"
                @click.prevent="scrollToSection('tech-stack')"
              >
                Show tech stack
              </a>
              <a 
                href="#contact" 
                class="px-6 py-3 border border-pink-700 text-pink-700 rounded-lg hover:bg-pink-700 hover:text-white transition-colors"
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
                 class="text-gray-600 dark:text-pink-100 hover:text-pink-700 transition-colors">
                <font-awesome-icon :icon="['fab', social.icon]" class="text-2xl" />
              </a>
            </div>
          </div>
          <div class="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-gray-100 dark:bg-pink-900/30 flex items-center justify-center">
            <img 
              src="/images/pawelkucia.jpg" 
              alt="Paweł Kucia" 
              class="w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full object-cover"
            />
          </div>
        </div>
      </section>

      <!-- Tech Stack Section -->
      <section id="tech-stack" class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-12 text-pink-700 text-center">Tech Stack</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div v-for="category in techStackCategories" :key="category.name" class="bg-gray-100 dark:bg-pink-900/30 p-6 rounded-lg">
            <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-pink-100 border-b border-gray-200 dark:border-pink-800/50 pb-2">
              {{ category.name }}
            </h3>
            <div class="space-y-4">
              <div v-for="tech in category.items" 
                   :key="tech.name"
                   class="flex items-center gap-3 group hover:bg-gray-200 dark:hover:bg-pink-900/50 p-2 rounded-lg transition-colors">
                <div class="w-8 h-8 flex items-center justify-center bg-white dark:bg-pink-900/50 rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                  <font-awesome-icon 
                    :icon="tech.icon" 
                    :class="[tech.iconClass, 'text-xl']"
                  />
                </div>
                <span class="text-gray-700 dark:text-pink-100">{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Experience Section -->
      <section v-if="false" id="experience" class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-12 text-pink-700 text-center">Experience</h2>
        <div class="relative max-w-5xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 h-full w-px bg-gray-200 dark:bg-pink-800/50 transform -translate-x-1/2"></div>
          
          <!-- Timeline Items -->
          <div class="space-y-16">
            <div v-for="(experience, index) in experiences" :key="index" class="relative">
              <!-- Timeline Dot -->
              <div class="absolute left-0 md:left-1/2 w-4 h-4 bg-pink-700 rounded-full transform -translate-x-1/2 mt-2"></div>
              
              <!-- Content -->
              <div :class="[
                'ml-6 md:ml-0 md:w-[calc(50%-2rem)]',
                index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-auto' : 'md:pl-8 md:ml-[50%]'
              ]">
                <div class="bg-gray-100 dark:bg-pink-900/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div class="flex items-center gap-4" :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
                    <img 
                      v-if="experience.logo"
                      :src="experience.logo"
                      :alt="`${experience.company} logo`"
                      class="w-12 h-12 object-contain rounded-lg bg-white dark:bg-pink-900/50 p-2"
                    />
                    <div>
                      <h3 class="text-xl font-semibold text-gray-900 dark:text-pink-100">{{ experience.company }}</h3>
                      <p class="text-pink-700 font-medium mb-2">{{ experience.role }}</p>
                    </div>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-pink-100 mb-2">
                    {{ formatDate(experience.start) }} - {{ experience.end ? formatDate(experience.end) : 'Present' }}
                    <span class="ml-1">· {{ calculateDuration(experience.start, experience.end) }}</span>
                  </p>
                  <p v-if="experience.technologies" class="text-sm text-gray-600 dark:text-pink-100">
                    {{ experience.technologies }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <section v-if="false" id="testimonials" class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-12 text-pink-700 text-center">What People Say</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="testimonial in testimonials" :key="testimonial.id" 
               class="bg-gray-100 dark:bg-pink-900/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div class="flex items-center gap-4 mb-4">
              <img 
                :src="testimonial.avatar" 
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-pink-100">{{ testimonial.name }}</h3>
                <p class="text-sm text-pink-700">{{ testimonial.position }}</p>
              </div>
            </div>
            <p class="text-gray-600 dark:text-pink-100 italic">{{ testimonial.text }}</p>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="container mx-auto px-4 py-20">
        <h2 class="text-3xl font-bold mb-12 text-pink-700 text-center">Contact</h2>
        <div class="flex flex-col items-center space-y-8">
          <div class="flex gap-8 mb-8">
            <a v-for="social in socialLinks" 
               :key="social.name"
               :href="social.url"
               :title="social.name"
               target="_blank"
               rel="noopener noreferrer"
               class="text-gray-600 dark:text-pink-100 hover:text-pink-700 transition-colors">
              <font-awesome-icon :icon="['fab', social.icon]" class="text-4xl" />
            </a>
          </div>
          <div class="flex flex-col items-center space-y-4">
            <div class="flex items-center gap-3 text-gray-600 dark:text-pink-100">
              <font-awesome-icon :icon="['fas', 'phone']" class="text-xl text-pink-700" />
              <span class="text-xl">+48 693 430 284</span>
            </div>
            <div class="flex items-center gap-3 text-gray-600 dark:text-pink-100">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="text-xl text-pink-700" />
              <span class="text-xl">POLAND</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TheHeader from '~/components/TheHeader.vue'

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

const formatDate = (dateStr) => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

const calculateDuration = (start, end) => {
  const startDate = new Date(start)
  const endDate = end ? new Date(end) : new Date()
  
  let years = endDate.getFullYear() - startDate.getFullYear()
  let months = endDate.getMonth() - startDate.getMonth()
  
  if (months < 0) {
    years--
    months += 12
  }
  
  const yearText = years > 0 ? `${years} ${years === 1 ? 'yr' : 'yrs'}` : ''
  const monthText = months > 0 ? `${months} ${months === 1 ? 'mo' : 'mos'}` : ''
  
  if (yearText && monthText) {
    return `${yearText} ${monthText}`
  }
  return yearText || monthText || 'Less than a month'
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

const experiences = [
  {
    company: 'FROGRIOT.PL',
    role: 'Senior Software Developer',
    start: '2014-07-01',
    end: null,
    technologies: 'Node.js, Vue.js, Nuxt.js, Symfony',
    logo: '/images/companies/frogriot.png'
  },
  {
    company: 'TOP4ALl.PL',
    role: 'Software Engineer',
    start: '2006-01-01',
    end: null,
    technologies: 'Node.js, Vue.js, Nuxt.js',
    logo: '/images/companies/top4all.png'
  },
  {
    company: 'Morten.pl',
    role: 'Solutions Architect',
    start: '2011-09-01',
    end: '2020-01-31',
    logo: '/images/companies/morten.png'
  },
  {
    company: 'KRUK SA',
    role: 'IT Project Manager',
    start: '2011-02-01',
    end: '2014-06-30',
    logo: '/images/companies/kruk.png'
  },
  {
    company: 'KRUK SA',
    role: 'Senior Software Developer',
    start: '2006-09-01',
    end: '2011-01-31',
    technologies: 'ASP .NET, C#, OOP, TDD, Agile, Scrum, ITIL',
    logo: '/images/companies/kruk.png'
  },
  {
    company: 'KRUK SA',
    role: 'Senior Database Developer',
    start: '2004-05-01',
    end: '2006-08-31',
    technologies: 'MS SQL Server, T-SQL, C#',
    logo: '/images/companies/kruk.png'
  },
  {
    company: 'KRUK SA',
    role: 'Database Developer',
    start: '2003-04-01',
    end: '2004-04-30',
    technologies: 'MS SQL Server, T-SQL, C#',
    logo: '/images/companies/kruk.png'
  }
]

const techStackCategories = [
  {
    name: 'Frontend',
    items: [
      {
        name: 'Vue.js',
        icon: ['fab', 'vuejs'],
        iconClass: 'text-emerald-500'
      },
      {
        name: 'Nuxt.js',
        icon: ['fab', 'vuejs'],
        iconClass: 'text-green-400'
      }
    ]
  },
  {
    name: 'Backend',
    items: [
      {
        name: 'Node.js',
        icon: ['fab', 'node-js'],
        iconClass: 'text-green-500'
      },
      {
        name: 'MongoDB',
        icon: ['fas', 'database'],
        iconClass: 'text-green-600'
      },
      {
        name: 'Supabase',
        icon: ['fas', 'database'],
        iconClass: 'text-emerald-400'
      },
      {
        name: 'PostgreSQL',
        icon: ['fas', 'database'],
        iconClass: 'text-blue-400'
      }
    ]
  },
  {
    name: 'DevOps',
    items: [
      {
        name: 'Docker',
        icon: ['fab', 'docker'],
        iconClass: 'text-blue-500'
      },
      {
        name: 'Git',
        icon: ['fab', 'git-alt'],
        iconClass: 'text-orange-600'
      }
    ]
  },
  {
    name: 'Cloud',
    items: [
      {
        name: 'AWS',
        icon: ['fab', 'aws'],
        iconClass: 'text-orange-400'
      },
      {
        name: 'Cloudflare',
        icon: ['fas', 'cloud'],
        iconClass: 'text-orange-500'
      }
    ]
  }
]

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    position: "CTO at TechCorp",
    text: "Paweł is an exceptional developer who consistently delivers high-quality solutions. His technical expertise and problem-solving skills are outstanding.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Product Manager at InnovateTech",
    text: "Working with Paweł was a great experience. His attention to detail and ability to understand complex requirements made our project a success.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Lead Developer at WebSolutions",
    text: "Paweł's expertise in full-stack development and cloud technologies helped us modernize our infrastructure and improve performance significantly.",
    avatar: "https://i.pravatar.cc/150?img=3"
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