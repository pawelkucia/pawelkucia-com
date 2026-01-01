<template>
  <section v-if="false" id="testimonials" class="container mx-auto px-4 py-20">
    <h2 class="text-3xl font-bold mb-12 text-blue-600 text-center">What People Say</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div v-for="testimonial in testimonials" :key="testimonial.id" 
           class="bg-gray-100 dark:bg-blue-900/30 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div class="flex items-center gap-4 mb-4">
          <img 
            :src="testimonial.avatar" 
            :alt="testimonial.name"
            class="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 class="font-semibold text-gray-900 dark:text-blue-100">{{ testimonial.name }}</h3>
            <p class="text-sm text-blue-600">{{ testimonial.position }}</p>
          </div>
        </div>
        <p class="text-gray-600 dark:text-blue-100 italic">{{ testimonial.text }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
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
