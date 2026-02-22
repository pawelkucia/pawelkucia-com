<template>
  <nav aria-label="Breadcrumb" class="mb-8">
    <ol class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
      <li v-for="(crumb, index) in crumbs" :key="index" class="flex items-center gap-2">
        <span v-if="index > 0" aria-hidden="true">/</span>
        <NuxtLink
          v-if="crumb.to"
          :to="crumb.to"
          class="hover:text-orange-600 dark:hover:text-orange-500 transition-colors"
        >
          {{ crumb.label }}
        </NuxtLink>
        <span v-else class="text-gray-900 dark:text-gray-100" aria-current="page">
          {{ crumb.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  crumbs: { label: string; to?: string }[]
}>()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: props.crumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.label,
          ...(crumb.to ? { item: crumb.to } : {})
        }))
      })
    }
  ]
})
</script>
