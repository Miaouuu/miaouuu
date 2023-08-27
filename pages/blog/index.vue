<script setup lang="ts">
const { findPosts } = useSuperContent()

useSuperHead('Blog', 'Miaouuu | On this page you can find a collection of blogposts')

const posts = await findPosts()

if (posts.length === 0) {
  navigateTo('/404')
}
</script>

<template>
  <NuxtLayout page-title="Brutal Blog">
    <main class="bg-green p-6">
      <blog-list :posts="posts" />
    </main>
  </NuxtLayout>
</template>
