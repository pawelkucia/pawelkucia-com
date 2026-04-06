<template>
  <main class="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white">
    <TheHeader />
  <div class="pt-28 pb-16">
    <div class="container mx-auto px-4 max-w-3xl">
      <Breadcrumbs :crumbs="[{ label: 'Home', to: '/' }, { label: 'Blog' }]" />
      <h1 class="text-4xl font-bold text-black dark:text-white mb-2">Blog</h1>
      <p class="text-lg text-gray-700 dark:text-gray-400 mb-12">Notes on full-stack development, architecture, and tooling.</p>

      <div v-if="posts && posts.length" class="flex flex-col gap-6">
        <BlogPostCard v-for="post in posts" :key="post._path" :post="post" horizontal />
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

import type { BlogPost } from '~/types/blog'

const { data: posts } = await useAsyncData('blog-posts', () =>
  queryContent('/blog').sort({ date: -1 }).find() as unknown as Promise<BlogPost[]>
)
</script>
