<script setup lang="ts">
import { Post } from '@/composables/useSuperContent'
import { Heading } from '@/components/blog/blog-sidebar.vue'

interface Link extends Heading {
  children: Link[]
}

const { page }: { page: Ref<Post> } = useContent()

useSuperHead(page.value?.title, page.value?.description)

function createHeadings(links: Link[]): Heading[] {
  return links.flatMap((link) => {
    const { id, text, depth } = link
    const heading: Heading = { id, text, depth }
    if (!link.children) return [heading]
    const childrenHeadings = createHeadings(link.children)
    return [heading, ...childrenHeadings]
  })
}

const headings = computed(() => {
  const content = page.value?.body
  if (!content) return []
  return createHeadings(content.toc.links)
})
</script>

<template>
  <base-navigation v-bind="$attrs" :page-title="page?.title || 'Post Not Found!'" />
  <main class="flex justify-center p-6 lg:grid lg:grid-cols-3">
    <blog-sidebar :headings="headings" />
    <blog-content :pub-date="page?.pubDate || '24/07/2023 12:25'" :author="page?.author || 'Ruben'">
      <slot />
    </blog-content>
  </main>
  <section class="p-6">
    <RecentBlogPosts :count="6" />
  </section>
  <base-footer />
</template>
