<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    pageTitle?: string
  }>(),
  {
    pageTitle: 'Page Not Found!',
  },
)
</script>

<template>
  <base-navigation :page-title="props.pageTitle" />
  <slot />
  <base-footer />
</template>
