<script setup lang="ts">
export interface Heading {
  id: string
  text: string
  depth: number
}

const props = defineProps<{
  headings: Heading[]
}>()
</script>

<template>
  <aside>
    <nav class="sticky top-6 hidden lg:block">
      <ul>
        <li v-for="(heading, index) in props.headings" :key="index" class="py-1">
          <span v-for="depth in heading.depth" :key="depth" class="inline-block w-4" />
          <NuxtLink
            class="hover:text-stone text-dark poppins transition-all duration-150 ease-in-out"
            :href="`#${heading.id}`"
          >
            {{ heading.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>
