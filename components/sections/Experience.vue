<template>
  <section v-if="false" id="experience" class="container mx-auto px-4 py-20">
    <h2 class="text-3xl font-bold mb-12 text-blue-600 text-center">Experience</h2>
    <div class="relative max-w-5xl mx-auto">
      <!-- Timeline Line -->
      <div class="absolute left-0 md:left-1/2 h-full w-px bg-gray-200 dark:bg-blue-800/50 transform -translate-x-1/2"></div>
      
      <!-- Timeline Items -->
      <div class="space-y-16">
        <div v-for="(experience, index) in experiences" :key="index" class="relative">
          <!-- Timeline Dot -->
          <div class="absolute left-0 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 mt-2"></div>
          
          <!-- Content -->
          <div :class="[
            'ml-6 md:ml-0 md:w-[calc(50%-2rem)]',
            index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-auto' : 'md:pl-8 md:ml-[50%]'
          ]">
            <div class="bg-gray-100 dark:bg-blue-900/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div class="flex items-center gap-4" :class="{ 'md:flex-row-reverse': index % 2 === 0 }">
                <img 
                  v-if="experience.logo"
                  :src="experience.logo"
                  :alt="`${experience.company} logo`"
                  class="w-12 h-12 object-contain rounded-lg bg-white dark:bg-blue-900/50 p-2"
                />
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 dark:text-blue-100">{{ experience.company }}</h3>
                  <p class="text-blue-600 font-medium mb-2">{{ experience.role }}</p>
                </div>
              </div>
              <p class="text-sm text-gray-600 dark:text-blue-100 mb-2">
                {{ formatDate(experience.start) }} - {{ experience.end ? formatDate(experience.end) : 'Present' }}
                <span class="ml-1">· {{ calculateDuration(experience.start, experience.end) }}</span>
              </p>
              <p v-if="experience.technologies" class="text-sm text-gray-600 dark:text-blue-100">
                {{ experience.technologies }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
</script>
