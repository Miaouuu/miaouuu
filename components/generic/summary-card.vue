<script setup lang="ts">
const props = defineProps<{
  title: string
  imgSrc: string
  imgAlt: string
  description: string
}>()
</script>

<template>
  <brutal-card color="white">
    <h3 class="poppins text-lg md:text-xl">{{ props.title }}</h3>
    <div class="border-3 my-4 h-56 rounded-lg border-black">
      <img
        :src="props.imgSrc"
        :alt="props.imgAlt"
        :width="800"
        :height="400"
        class="h-full w-full rounded object-cover"
      />
    </div>
    <p class="poppins">{{ props.description }}</p>
    <slot />
  </brutal-card>
</template>
