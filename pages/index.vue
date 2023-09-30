<script setup lang="ts">
useSuperHead('Home', 'Miaouuu | A minimalistic, neobrutalism theme for Nuxt.')

const builtWith = [{ name: 'Delere', url: 'https://delere.email/', icon: 'delere' }]

const team = [
  {
    name: 'Kemici Cagnard',
    role: 'Chief Product Officer',
    avatar:
      'https://media.licdn.com/dms/image/C4D03AQGf2eWrW1r47g/profile-displayphoto-shrink_800_800/0/1624745148471?e=1698883200&v=beta&t=XNODEkxaMU6Xn_1z5EgYemsItnK0U0RszlHiYifDFyQ',
    linkedin: 'https://www.linkedin.com/in/kemici-cagnard/',
  },
  {
    name: 'Guillaume Prigent',
    role: 'Chief Executive Officer',
    avatar:
      'https://media.licdn.com/dms/image/D4E03AQF5lE2952Q2tA/profile-displayphoto-shrink_800_800/0/1678119208378?e=1698883200&v=beta&t=mpRBBTs_5OQJ_E46WM9psk1hE89vRpMzJi0dRygXr9o',
    github: 'https://github.com/Lockev',
    linkedin: 'https://www.linkedin.com/in/prigent-guillaume/',
  },
  {
    name: 'Ruben Barros',
    role: 'Devops Engineer',
    avatar:
      'https://media.licdn.com/dms/image/D4E03AQEazo_QMf3YsA/profile-displayphoto-shrink_800_800/0/1666967684388?e=1698883200&v=beta&t=eLewE4eMUXq15Z77wM8k5GJppkzxDjh7tV7WQRmpwnk',
    twitter: 'https://twitter.com/sasnovacat08',
    github: 'https://github.com/SASNOVACAT08',
    linkedin: 'https://www.linkedin.com/in/barrosruben/',
  },
  {
    name: 'Heddi Brahiti',
    role: 'Fullstack Developer',
    avatar:
      'https://media.licdn.com/dms/image/C4E03AQEcBvBRzJ0sig/profile-displayphoto-shrink_800_800/0/1586808807486?e=1698883200&v=beta&t=7W_gZpwmrFqQJSxHEQVuAc-cy6V66r2fedbsrQTu6pI',
    github: 'https://github.com/heddib',
    linkedin: 'https://www.linkedin.com/in/heddi-brahiti/',
  },
  {
    name: 'Vincent Zhu',
    role: 'Fullstack Developer',
    avatar:
      'https://media.licdn.com/dms/image/C5603AQF6_r7gzJHqAA/profile-displayphoto-shrink_800_800/0/1543324805004?e=2147483647&v=beta&t=ng3vr3z3O64IpjsuAkvfLtqcGmG3L1T3NR5mhx72ZmQ',
    github: 'https://github.com/Zhiwei-Zhu',
    linkedin: 'https://www.linkedin.com/in/vincentzhu-/',
  },
  {
    name: 'Etiennne Secondini',
    role: 'Devops Engineer',
    avatar:
      'https://media.licdn.com/dms/image/C4E03AQHL-CR-qWhuWg/profile-displayphoto-shrink_800_800/0/1658687955579?e=1698883200&v=beta&t=CnPelUgVUmh8vd3UpL6BwHVQQLCa6UZDTIKu-ilTvZI',
    github: 'https://github.com/etsec-cloud',
    linkedin: 'https://www.linkedin.com/in/etienne-secondini-109549182/',
  },
]
</script>

<template>
  <NuxtLayout page-title="Brutal Theme | Home">
    <main class="bg-pink p-6">
      <mobile-socials />
      <section id="about" class="mt-8 grid gap-8 md:mt-4 md:grid-cols-8">
        <h2 class="hidden">About SAS Miaouuu Corp</h2>
        <div class="col-span-4">
          <brutal-card>
            <div class="flex flex-col items-start justify-between gap-4">
              <p class="outfit mt-4 text-2xl text-white md:text-5xl lg:text-7xl">Miaouuu Corp</p>
              <p class="outfit mt-2 text-xl md:text-3xl lg:text-5xl">
                We provide the best experience for our customers.
              </p>
            </div>
          </brutal-card>
        </div>
        <div class="col-span-4">
          <brutal-card>
            <h2 class="dm-serif mb-8 text-2xl md:text-4xl lg:text-6xl">Our products</h2>
            <div v-for="item in builtWith" :key="item.name" class="flex">
              <NuxtLink
                target="_blank"
                :to="item.url"
                class="text-green card-shadow rounded border-2 border-black bg-white px-1 py-1"
              >
                <img :src="`/${item.icon}.svg`" :alt="item.name" class="h-16 w-16" />
              </NuxtLink>
            </div>
          </brutal-card>
        </div>
      </section>
      <section class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        <brutal-card v-for="people in team" :key="people.name" class="flex flex-col items-start justify-between gap-4">
          <div class="flex items-center justify-center gap-8">
            <img
              :src="people.avatar"
              :alt="people.name"
              class="card-shadow h-32 w-32 rounded-full border-2 border-black"
            />
            <div>
              <p class="outfit mt-4 text-4xl [word-spacing:100vw]">{{ people.name }}</p>
              <p class="outfit mt-2 text-2xl">{{ people.role }}</p>
            </div>
          </div>
          <div class="flex w-full justify-between">
            <NuxtLink
              v-if="people.linkedin"
              target="_blank"
              :to="people.linkedin"
              class="text-green card-shadow rounded border-2 border-black bg-white px-4 py-2"
            >
              <div :class="`i-uil-linkedin p-6`" />
            </NuxtLink>
            <NuxtLink
              v-if="people.twitter"
              target="_blank"
              :to="people.twitter"
              class="text-green card-shadow rounded border-2 border-black bg-white px-4 py-2"
            >
              <div :class="`i-uil-twitter p-6`" />
            </NuxtLink>
            <NuxtLink
              v-if="people.github"
              target="_blank"
              :to="people.github"
              class="text-green card-shadow rounded border-2 border-black bg-white px-4 py-2"
            >
              <div :class="`i-uil-github p-6`" />
            </NuxtLink>
          </div>
        </brutal-card>
      </section>
      <recent-blog-posts />
    </main>
  </NuxtLayout>
</template>
