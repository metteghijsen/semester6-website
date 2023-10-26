<template>
  <NuxtLink :to="to">
    <div class="bg-white w-full max-h-[524px] flex flex-row rounded-3xl mb-3" :class="reverse ? 'flex-row' : 'flex-row-reverse'">
      <NuxtImg :src="`/img/projects/${imageName}.png`" :alt="imageName" class="w-full max-w-[500px] max-h-[400px] object-cover my-11 rounded-3xl mx-4" :class="reverse ? 'ml-10' : 'mr-10'" />
      <div class="flex flex-col mx-10">
        <UiTypography type="h3" size="heading3" class="pt-11 pb-1">
          {{ projectName }}
        </UiTypography>
        <UiTypography type="p" class="opacity-50 pb-3">
          {{ projectDescription }}
        </UiTypography>
        <div class="w-[300px]">
          <UiButton label="view project" primary regular arrow />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Project',
  props: {
    imageName: {
      type: String,
      required: true
    },
    projectName: {
      type: String,
      required: true
    },
    projectDescription: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    reverse: Boolean
  }
})
</script>
