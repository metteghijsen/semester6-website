<template>
  <div class="flex justify-center items-center">
    <NuxtLink :to="to" target="_blank">
      <NuxtImg :src="`/img/logos/${imageName}.png`" :alt="imageName" class="grayscale hover:grayscale-0 transition-all duration-300 ease-in-out lg:max-h-[100px]" />
    </NuxtLink>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Logo',
  props: {
    imageName: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    }
  }
})
</script>
