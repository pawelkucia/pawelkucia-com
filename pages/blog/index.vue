<template>
  <main class="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white">
    <TheHeader />
  <div class="pt-28 pb-16">
    <div class="container mx-auto px-4 max-w-3xl">
      <Breadcrumbs :crumbs="[{ label: 'Home', to: '/' }, { label: 'Blog' }]" />
      <h1 class="text-4xl font-bold text-black dark:text-white mb-2">Blog</h1>
      <p class="text-gray-500 dark:text-gray-400 mb-12">Notes on full-stack development, architecture, and tooling.</p>

      <div v-if="posts && posts.length" class="flex flex-col gap-8">
        <article
          v-for="post in posts"
          :key="post._path"
          class="border border-gray-200 dark:border-blue-900/40 rounded-2xl overflow-hidden bg-white/40 dark:bg-blue-900/10 backdrop-blur-sm hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors"
        >
          <NuxtLink :to="post._path" class="group flex gap-0">
            <img
              v-if="post.cover"
              :src="`/images/blog/${getSlug(post._path ?? '')}.jpeg`"
              :alt="post.title"
              class="w-36 h-36 sm:w-48 sm:h-48 flex-shrink-0 object-cover"
            />
            <div class="p-6 flex flex-col justify-between min-w-0">
              <div>
                <h2 class="text-xl font-bold text-black dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors mb-2">
                  {{ post.title }}
                </h2>
                <p class="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {{ formatDate(post.date) }}
                </p>
                <p class="text-gray-600 dark:text-gray-300 mb-4">{{ post.description }}</p>
              </div>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in post.tags"
                  :key="tag"
                  class="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-blue-900/30 text-gray-600 dark:text-gray-300"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <p v-else class="text-gray-500 dark:text-gray-400">No posts yet.</p>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
useHead({
  title: 'Blog — Paweł Kucia',
  meta: [
    { name: 'description', content: 'Notes on full-stack development, architecture, and tooling by Paweł Kucia.' }
  ]
})

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').sort({ date: -1 }).find()
)

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))

const getSlug = (path: string) => path.split('/').at(-1) ?? ''
</script>
