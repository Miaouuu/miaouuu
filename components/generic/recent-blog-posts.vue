<script setup lang="ts">
const { findPostsSortedWithLimit } = useSuperContent()

const props = defineProps<{
  count?: number
}>()

const posts = await findPostsSortedWithLimit(props.count || 3)
</script>

<template>
  <section class="mt-8">
    <brutal-card>
      <div class="flex items-start justify-between">
        <h2 class="dm-serif mb-8 text-2xl md:text-4xl lg:text-6xl">Recent Blogposts</h2>
        <div class="hidden md:block">
          <brutal-button href="/blog/">Go to blog &rarr;</brutal-button>
        </div>
        <div class="block md:hidden">
          <brutal-button href="/blog/">to blog</brutal-button>
        </div>
      </div>
      <blog-list :posts="posts" />
    </brutal-card>
  </section>
</template>
