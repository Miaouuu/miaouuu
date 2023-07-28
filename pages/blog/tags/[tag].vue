<script setup lang="ts">
const { params } = useRoute()
const { findPostsByTag } = useSuperContent()

useSuperHead(`Blog: ${params.tag}`, `Brutal Theme | All posts tagged with ${params.tag}`)

const posts = await findPostsByTag(params.tag.toString())
</script>

<template>
  <NuxtLayout :page-title="`Brutal Blog | Blogposts tagged with ${params.tag}`">
    <main class="bg-purple grid gap-4 p-6">
      <div>
        <brutal-button href="/blog/">&larr; Back to blog</brutal-button>
      </div>
      <blog-list :posts="posts" />
    </main>
  </NuxtLayout>
</template>
