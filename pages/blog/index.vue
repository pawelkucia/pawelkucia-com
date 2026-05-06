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

      <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-12">
        <NuxtLink
          :to="page > 1 ? { query: { page: page - 1 } } : undefined"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            page > 1
              ? 'border border-gray-300 dark:border-blue-900/40 hover:border-orange-500/50 dark:hover:border-orange-500/50 text-gray-700 dark:text-gray-300'
              : 'pointer-events-none opacity-40 border border-gray-200 dark:border-blue-900/20 text-gray-400 dark:text-gray-600'
          ]"
        >
          &larr; Prev
        </NuxtLink>

        <NuxtLink
          v-for="p in totalPages"
          :key="p"
          :to="{ query: p === 1 ? undefined : { page: p } }"
          :class="[
            'w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors',
            p === page
              ? 'border border-orange-500 text-orange-500'
              : 'border border-gray-300 dark:border-blue-900/40 hover:border-orange-500/50 dark:hover:border-orange-500/50 text-gray-700 dark:text-gray-300'
          ]"
        >
          {{ p }}
        </NuxtLink>

        <NuxtLink
          :to="page < totalPages ? { query: { page: page + 1 } } : undefined"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-medium transition-colors',
            page < totalPages
              ? 'border border-gray-300 dark:border-blue-900/40 hover:border-orange-500/50 dark:hover:border-orange-500/50 text-gray-700 dark:text-gray-300'
              : 'pointer-events-none opacity-40 border border-gray-200 dark:border-blue-900/20 text-gray-400 dark:text-gray-600'
          ]"
        >
          Next &rarr;
        </NuxtLink>
      </div>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
import type { BlogPost } from '~/types/blog'

const POSTS_PER_PAGE = 10

const route = useRoute()
const page = computed(() => Math.max(1, Number(route.query.page) || 1))

const { data: allSlugs } = await useAsyncData('blog-posts-count', () =>
  queryContent('/blog').only(['_path']).find()
)

const totalPages = computed(() => Math.ceil((allSlugs.value?.length ?? 0) / POSTS_PER_PAGE))

const { data: posts } = await useAsyncData(
  () => `blog-posts-page-${page.value}`,
  () => queryContent('/blog')
    .sort({ date: -1 })
    .skip((page.value - 1) * POSTS_PER_PAGE)
    .limit(POSTS_PER_PAGE)
    .find() as unknown as Promise<BlogPost[]>,
  { watch: [page] }
)

useHead({
  title: computed(() => page.value > 1 ? `Blog - Page ${page.value} - Paweł Kucia` : 'Blog - Paweł Kucia'),
  meta: [
    { name: 'description', content: 'Notes on full-stack development, architecture, and tooling by Paweł Kucia.' }
  ]
})
</script>
