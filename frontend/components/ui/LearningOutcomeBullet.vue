<template>
  <div>
    <div class="rounded-full h-3 flex items-center w-max pr-2 pl-1 my-2 mr-1 cursor-default" :class="'bg-' + bgColor" :title="title">
      <div class="rounded-full mr-1 w-2 h-2 my-0.5" :class="'bg-' + color" />
      <UiTypography type="p" size="paragraph-extra-small" class="opacity-80 dark:opacity-100 font-medium" color="text-black100">
        {{ label }}
      </UiTypography>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LearningOutcomeBullet',
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    bgColor: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
})
</script>
