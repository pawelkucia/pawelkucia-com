<template>
  <section id="tech-stack" class="container mx-auto px-4 py-8">
    <h2 class="text-3xl font-semibold mb-2 text-black dark:text-white">Tech Stack</h2>
    <p class="text-lg mb-10 text-gray-700 dark:text-gray-300 max-w-3xl">
      Here are some of the technologies and tools I work with to build modern web applications:
    </p>
    <div class="flex flex-wrap gap-3 max-w-4xl mx-auto justify-center">
      <span 
        v-for="tech in techStack" 
        :key="tech.name"
        class="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-blue-900/30 rounded-full hover:bg-gray-200 dark:hover:bg-blue-900/50 transition-colors group cursor-default"
      >
        <font-awesome-icon 
          :icon="tech.icon" 
          :class="[tech.iconClass, 'text-lg']"
        />
        <span class="text-gray-800 dark:text-blue-100 font-medium">{{ tech.name }}</span>
      </span>
    </div>
  </section>
</template>

<script setup>
const techStack = [
{
    name: 'JavaScript',
    icon: ['fab', 'js'],
    iconClass: 'text-yellow-500'
  },  
  {
    name: 'TypeScript',
    icon: ['fab', 'js'],
    iconClass: 'text-blue-500'
  },
  {
    name: 'Vue.js',
    icon: ['fab', 'vuejs'],
    iconClass: 'text-emerald-500'
  },
  {
    name: 'Nuxt.js',
    icon: ['fab', 'vuejs'],
    iconClass: 'text-green-400'
  },
  {
    name: 'Tailwind CSS',
    icon: ['fab', 'js'],
    iconClass: 'text-teal-400'  
  },
  {
    name: 'Bootstrap',
    icon: ['fab', 'bootstrap'],
    iconClass: 'text-purple-600'  
  },
  {
    name: 'Node.js',
    icon: ['fab', 'node-js'],
    iconClass: 'text-green-500'
  },
  {
    name: 'Express.js',
    icon: ['fas', 'server'],
    iconClass: 'text-gray-600'
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
    name: 'Firebase',
    icon: ['fas', 'database'],
    iconClass: 'text-yellow-400'
  },
  {
    name: 'PostgreSQL',
    icon: ['fas', 'database'],
    iconClass: 'text-blue-400'
  },
  
  {
    name: 'MySQL',
    icon: ['fas', 'database'],
    iconClass: 'text-blue-600'  
  },
  {
    name: 'Docker',
    icon: ['fab', 'docker'],
    iconClass: 'text-blue-500'
  },
  {
    name: 'Git',
    icon: ['fab', 'git-alt'],
    iconClass: 'text-orange-600'
  },
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
</script>
