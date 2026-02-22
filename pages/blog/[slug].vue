<template>
  <main class="min-h-screen bg-primary-light dark:bg-primary-dark text-gray-900 dark:text-white">
    <TheHeader />
  <div class="pt-28 pb-16">
    <div class="container mx-auto px-4 max-w-3xl">
      <Breadcrumbs
        :crumbs="[
          { label: 'Home', to: '/' },
          { label: 'Blog', to: '/blog' },
          { label: post?.title ?? slug }
        ]"
      />

      <template v-if="post">
        <header class="mb-10">
          <h1 class="text-4xl font-bold text-black dark:text-white mb-3">{{ post.title }}</h1>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-4">{{ formatDate(post.date) }}</p>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in post.tags"
              :key="tag"
              class="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-blue-900/30 text-gray-600 dark:text-gray-300"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <img
          v-if="post.cover"
          :src="`/images/blog/${slug}.jpeg`"
          :alt="post.title"
          class="w-full max-w-sm aspect-square object-cover rounded-2xl mb-10"
        />

        <div class="prose prose-gray dark:prose-invert max-w-none
                    prose-headings:font-bold prose-headings:text-black dark:prose-headings:text-white
                    prose-p:text-gray-600 dark:prose-p:text-gray-300
                    prose-a:text-orange-600 prose-a:no-underline hover:prose-a:text-orange-500
                    prose-strong:text-black dark:prose-strong:text-white
                    prose-code:bg-gray-100 dark:prose-code:bg-blue-900/30 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none
                    prose-pre:bg-gray-900 prose-pre:rounded-2xl
                    prose-li:text-gray-600 dark:prose-li:text-gray-300">
          <ContentRenderer :value="post" />
        </div>
      </template>

      <p v-else class="text-gray-500 dark:text-gray-400">Post not found.</p>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
const route = useRoute()
const slug = route.params.slug as string

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryContent('/blog', slug).findOne()
)

if (post.value) {
  useHead({
    title: `${post.value.title} — Paweł Kucia`,
    meta: [
      { name: 'description', content: post.value.description }
    ]
  })
}

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))
</script>
