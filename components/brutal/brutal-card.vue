<script setup lang="ts">
const { randomColor } = useColor()
const props = withDefaults(
  defineProps<{
    color?: string
  }>(),
  {
    color: undefined,
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
  <div class="brutal-card" :style="cssVars">
    <slot />
  </div>
</template>

<style scoped>
div.brutal-card {
  background-color: var(--color);
  border-radius: 0.5rem;
  border: 3px solid black;
  filter: drop-shadow(7px 7px 0 rgb(0 0 0 / 1));
  transition: all;
  padding: 1rem;
  transition-duration: 0.5s;
  animation: ease-in-out;
}
div.brutal-card:hover {
  filter: drop-shadow(5px 5px 0 rgb(0 0 0 / 1));
}
</style>
