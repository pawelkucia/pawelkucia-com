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
const siteUrl = 'https://pawelkucia.com'

const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  queryContent('/blog', slug).findOne()
)

if (post.value) {
  const canonicalUrl = `${siteUrl}/blog/${slug}`
  const ogImage = `${siteUrl}/images/blog/${slug}.jpeg`

  useHead({
    title: `${post.value.title} — Paweł Kucia`,
    link: [
      { rel: 'canonical', href: canonicalUrl }
    ],
    meta: [
      // Basic
      { name: 'description', content: post.value.description },
      { name: 'author', content: 'Paweł Kucia' },
      { name: 'robots', content: 'index, follow' },
      // Open Graph
      { property: 'og:type', content: 'article' },
      { property: 'og:title', content: post.value.title },
      { property: 'og:description', content: post.value.description },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:site_name', content: 'Paweł Kucia' },
      { property: 'og:locale', content: 'en_US' },
      ...(post.value.cover ? [
        { property: 'og:image', content: ogImage },
        { property: 'og:image:alt', content: post.value.title },
        { property: 'og:image:type', content: 'image/jpeg' },
      ] : []),
      // Article
      { property: 'article:published_time', content: new Date(post.value.date).toISOString() },
      { property: 'article:author', content: 'Paweł Kucia' },
      ...(post.value.tags ?? []).map((tag: string) => ({ property: 'article:tag', content: tag })),
      // Twitter Card
      { name: 'twitter:card', content: post.value.cover ? 'summary_large_image' : 'summary' },
      { name: 'twitter:title', content: post.value.title },
      { name: 'twitter:description', content: post.value.description },
      ...(post.value.cover ? [
        { name: 'twitter:image', content: ogImage },
        { name: 'twitter:image:alt', content: post.value.title },
      ] : []),
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.value.title,
          description: post.value.description,
          datePublished: new Date(post.value.date).toISOString(),
          author: {
            '@type': 'Person',
            name: 'Paweł Kucia',
            url: siteUrl,
          },
          publisher: {
            '@type': 'Person',
            name: 'Paweł Kucia',
            url: siteUrl,
          },
          url: canonicalUrl,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': canonicalUrl,
          },
          ...(post.value.cover ? {
            image: {
              '@type': 'ImageObject',
              url: ogImage,
            }
          } : {}),
          keywords: (post.value.tags ?? []).join(', '),
        })
      }
    ]
  })
}

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))
</script>
