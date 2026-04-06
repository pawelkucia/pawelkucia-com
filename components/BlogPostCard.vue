<template>
  <article class="border border-gray-200 dark:border-blue-900/40 rounded-2xl overflow-hidden bg-white/40 dark:bg-blue-900/10 backdrop-blur-sm hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors h-full">
    <NuxtLink :to="post._path" :class="['group flex h-full', horizontal ? 'flex-col sm:flex-row' : 'flex-col']">
      <img
        v-if="post.cover"
        :src="`/images/blog/${slug}.jpeg`"
        :alt="post.title"
        :class="horizontal
          ? 'w-full h-48 sm:w-48 sm:h-auto flex-shrink-0 object-cover'
          : 'w-full h-48 object-cover flex-shrink-0'"
      />
      <div class="p-6 flex flex-col justify-between flex-1 min-w-0">
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
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types/blog'

const props = defineProps<{
  post: BlogPost
  horizontal?: boolean
}>()

const slug = computed(() => props.post._path?.split('/').at(-1) ?? '')

const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' }).format(new Date(date))
</script>
