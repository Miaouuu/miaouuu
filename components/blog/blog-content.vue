<script setup lang="ts">
const props = defineProps<{
  pubDate: string
  author: string
}>()
</script>

<template>
  <article class="prose-slate w-sm md:w-prose md:prose poppins">
    <NuxtLink href="/blog/" title="Back to blog">&larr; Back to blog</NuxtLink>
    <p class="text-slate text-sm md:text-base">Published on {{ props.pubDate }} by {{ props.author }}</p>
    <slot />
    <p class="text-slate">Written by {{ props.author }}</p>
    <NuxtLink href="/blog/" title="Back to blog">&larr; Back to blog</NuxtLink>
  </article>
</template>
