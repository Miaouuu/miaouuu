<script setup lang="ts">
import { Post } from '@/composables/useSuperContent'

const props = defineProps<{
  posts: Post[]
}>()
</script>

<template>
  <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    <li v-for="(post, index) in props.posts" :key="index">
      <blog-summary-card :post="post" />
    </li>
  </ul>
</template>
