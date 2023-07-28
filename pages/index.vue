<script setup lang="ts">
useSuperHead('Home', 'Brutal Theme | A minimalistic, neobrutalism theme for Nuxt.')

const builtWith = [
  { name: 'Nuxt', url: 'https://nuxt.com/' },
  { name: 'UnoCSS', url: 'https://uno.antfu.me/' },
  {
    name: 'Nuxt Content',
    url: 'https://content.nuxtjs.org/',
  },
  {
    name: 'Sitemap',
    url: 'https://nuxtseo.com/sitemap/getting-started/installation/',
  },
  { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
]
</script>

<template>
  <NuxtLayout page-title="Brutal Theme | Home">
    <main class="bg-pink p-6">
      <mobile-socials />
      <section id="about" class="mt-4 grid gap-8 md:grid-cols-8">
        <h2 class="hidden">About Brutal</h2>
        <div class="col-span-4">
          <brutal-card>
            <div class="flex flex-col items-start justify-between gap-4">
              <p class="outfit mt-4 text-2xl md:text-5xl lg:text-7xl">
                Brutal theme for
                <NuxtLink class="text-white" target="_blank" href="https://nuxt.com/">Nuxt</NuxtLink>
              </p>
              <p class="outfit mt-2 text-xl md:text-3xl lg:text-5xl">A minimalistic, neobrutalism theme for Nuxt.</p>
              <brutal-button target="_self" href="/blog/"> Check out the blog &rarr; </brutal-button>
            </div>
          </brutal-card>
        </div>
        <div class="col-span-2">
          <brutal-card>
            <h2 class="dm-serif mb-8 text-2xl md:text-4xl lg:text-6xl">Brutal is built with</h2>
            <ul class="flex flex-wrap gap-4">
              <li v-for="item in builtWith" :key="item.name">
                <brutal-pill>
                  <NuxtLink class="sanchez" :href="item.url" target="_blank" :title="`Go to ${item.name}`">
                    {{ item.name }}
                  </NuxtLink>
                </brutal-pill>
              </li>
            </ul>
          </brutal-card>
        </div>
        <div class="col-span-2">
          <brutal-card>
            <h2 class="dm-serif mb-4 text-2xl md:text-4xl lg:text-6xl">What is Brutal?</h2>
            <p class="poppins">
              Brutal is a theme built with Nuxt, UnoCSS by
              <NuxtLink href="https://example.com/">Ruben</NuxtLink>. It's a simple, fast, and modern theme that is easy
              to use and customize. Mainly meant to power blogs and personal websites.
            </p>
          </brutal-card>
        </div>
      </section>
      <recent-blog-posts />
    </main>
  </NuxtLayout>
</template>
