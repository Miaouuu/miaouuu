<script setup lang="ts">
const { findPosts } = useSuperContent()

useSuperHead('Blog', 'Brutal Theme | On this page you can find a collection of blogposts')

const posts = await findPosts()
</script>

<template>
  <NuxtLayout page-title="Brutal Blog">
    <main class="bg-green p-6">
      <blog-list :posts="posts" />
    </main>
  </NuxtLayout>
</template>
