<script setup lang="ts">
const socials = [
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
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: 'i-uil-linkedin',
  },
]
</script>

<template>
  <section class="md:hidden">
    <h2 class="hidden">Socials section</h2>
    <ul class="flex justify-between">
      <li
        v-for="item in socials"
        :key="item.name"
        class="text-green card-shadow rounded border-2 border-black bg-white px-4 py-2"
      >
        <NuxtLink :href="item.url" target="_blank" :title="`Go to ${item.name}`">
          <div :class="`${item.icon} p-6`" />
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
