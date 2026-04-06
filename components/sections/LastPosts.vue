<template>
  <section id="last-posts" class="container mx-auto px-4 py-20">
    <div class="flex items-end justify-between gap-8 mb-8">
      <div>
        <h2 class="text-3xl font-bold text-black dark:text-white mb-2">Last Posts</h2>
        <p class="text-lg text-gray-700 dark:text-gray-400">Latest notes on development, architecture, and tooling.</p>
      </div>
      <NuxtLink
        to="/blog"
        class="hidden sm:inline-flex text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors whitespace-nowrap"
      >
        View all posts →
      </NuxtLink>
    </div>
    <div v-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <BlogPostCard v-for="post in posts" :key="post._path" :post="post as any" />
    </div>
    <div class="mt-6 sm:hidden">
      <NuxtLink to="/blog" class="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
        View all posts →
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: posts } = await useAsyncData('last-posts', () =>
  queryContent('/blog').sort({ date: -1 }).limit(3).find()
)
</script>
