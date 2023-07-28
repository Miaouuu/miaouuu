<script setup lang="ts">
const props = defineProps<{
  pageTitle: string
}>()

const navigationItems = [
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog/' },
]

const socialIcons = [
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: 'i-uil-github',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com/',
    icon: 'i-uil-twitter',
  },
  { name: 'RSS', url: '/feed.xml', icon: 'i-uil-rss' },
]
</script>

<template>
  <header class="flex items-center justify-between border-b-4 border-black p-6">
    <h1 class="hidden">{{ props.pageTitle }}</h1>
    <NuxtLink href="/" title="Back to Home">
      <p class="righteous md:text-5xl">Brutal</p>
    </NuxtLink>
    <nav class="hidden md:inline-block">
      <h2 class="hidden">Navigation</h2>
      <ul class="poppins flex gap-8">
        <li v-for="item in navigationItems" :key="item.name">
          <NuxtLink
            class="hover:text-green text-lg font-medium transition-all duration-150 ease-in-out hover:underline"
            :href="item.url"
            :title="`Go to ${item.name}`"
          >
            {{ item.name }}
          </NuxtLink>
        </li>
        <li v-for="item in socialIcons" :key="item.name">
          <NuxtLink
            :href="item.url"
            class="hover:text-green transition-all duration-150 ease-in-out hover:underline"
            target="_blank"
            :title="`'See on ${item.name} @Example`"
          >
            <div :class="`${item.icon} h-6 w-6`" />
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <nav class="flex md:hidden">
      <h2 class="hidden">Mobile Navigation</h2>
      <ul>
        <li><NuxtLink href="/blog/">Blog</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>
