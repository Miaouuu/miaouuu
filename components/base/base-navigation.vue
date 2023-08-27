<script setup lang="ts">
const { findPostsSortedWithLimit } = useSuperContent()

const posts = await findPostsSortedWithLimit(1)

const props = defineProps<{
  pageTitle: string
}>()

const navigationItems = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog/', hidden: posts.length === 0 },
]

const socialIcons = [
  {
    name: 'GitHub',
    url: 'https://github.com/Miaouuu',
    icon: 'i-uil-github',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/MiaouuuCorp',
    icon: 'i-uil-twitter',
  },
  { name: 'RSS', url: '/feed.xml', icon: 'i-uil-rss' },
]
</script>

<template>
  <header class="flex items-center justify-between border-b-4 border-black p-6">
    <h1 class="hidden">{{ props.pageTitle }}</h1>
    <NuxtLink href="/" title="Back to Home">
      <p class="righteous md:text-5xl">Miaouuu</p>
    </NuxtLink>
    <nav class="hidden md:inline-block">
      <h2 class="hidden">Navigation</h2>
      <ul class="poppins flex gap-8">
        <template v-for="item in navigationItems" :key="item.name">
          <li v-if="!item.hidden">
            <NuxtLink
              class="hover:text-green text-lg font-medium transition-all duration-150 ease-in-out hover:underline"
              :href="item.url"
              :title="`Go to ${item.name}`"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </template>
        <li v-for="item in socialIcons" :key="item.name">
          <NuxtLink
            :href="item.url"
            class="hover:text-green transition-all duration-150 ease-in-out hover:underline"
            target="_blank"
            :title="`See on ${item.name} @MiaouuuCorp`"
          >
            <div :class="`${item.icon} h-6 w-6`" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <nav v-if="posts.length > 0" class="flex md:hidden">
      <h2 class="hidden">Mobile Navigation</h2>
      <ul>
        <li><NuxtLink href="/blog/">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
