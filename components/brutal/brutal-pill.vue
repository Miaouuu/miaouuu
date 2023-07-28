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
  <span class="brutal-pill" :style="cssVars">
    <slot />
  </span>
</template>

<style scoped>
span.brutal-pill {
  filter: drop-shadow(3px 3px 0 rgb(0 0 0 / 1));
  user-select: none;
  background-color: white;
  border-radius: 9999px;
  border: 2px solid black;
  padding: 0.25rem 0.75rem;
  transition: all;
  transition-duration: 0.5s;
  animation: ease-in-out;
  font-size: small;
}

span.brutal-pill:hover {
  filter: drop-shadow(5px 5px 0 rgb(0 0 0 / 1));
  background-color: var(--color);
}
</style>
