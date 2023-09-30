<script setup lang="ts">
const { randomColor } = useColor()
const props = withDefaults(
  defineProps<{
    href: string
    color?: string
    target?: string
  }>(),
  {
    color: undefined,
    target: '_self',
  },
)

const cssVars = computed(() => {
  const color = props.color ?? randomColor()
  return {
    '--color': color,
  }
})
</script>

<template>
  <NuxtLink
    :href="props.href"
    :target="props.target"
    class="brutal-btn sanchez z-50 inline-block border-2 border-black px-4 py-2 transition-all duration-150 ease-in-out"
    :style="cssVars"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
a.brutal-btn {
  filter: drop-shadow(5px 5px 0 rgb(0 0 0 / 1));
  background-color: white;
}
a.brutal-btn:hover {
  filter: drop-shadow(3px 3px 0 rgb(0 0 0 / 1));
  background-color: var(--color);
}
</style>
