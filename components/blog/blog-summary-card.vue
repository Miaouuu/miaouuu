<script setup lang="ts">
import { Post } from '@/composables/useSuperContent'

const props = defineProps<{
  post: Post
}>()
</script>

<template>
  <summary-card
    :title="props.post.title"
    :img-alt="props.post.title"
    :img-src="props.post.imgUrl"
    :description="props.post.description"
  >
    <div class="my-4 flex justify-end">
      <brutal-button :href="`${post._path}/`">Read post &rarr;</brutal-button>
    </div>

    <div class="hidden sm:inline-block">
      <p class="poppins mt-2">tags:</p>
      <div class="flex items-center justify-between">
        <ul class="mt-2 flex gap-4">
          <li v-for="tag in props.post.tags" :key="tag">
            <NuxtLink class="sanchez" :href="`/blog/tags/${tag.toLowerCase()}/`">
              <brutal-pill>{{ tag }}</brutal-pill>
            </NuxtLink>
          </li>
        </ul>
        <span v-if="props.post.draft" class="bg-green card-shadow rounded-full border-2 border-black px-4 py-1 text-sm">
          Draft
        </span>
      </div>
    </div>
  </summary-card>
</template>
