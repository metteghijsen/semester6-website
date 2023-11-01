<template>
  <div class="bg-white100 dark:bg-slate-800 w-full rounded-3xl my-2">
    <div class="pl-7">
      <UiTypography type="h4" size="heading4" :color="loNameColor" class="pt-8">
        {{ loName }}
      </UiTypography>
      <UiTypography type="p" class="opacity-50 pt-2 pb-9 pr-4">
        {{ loDescription }}
      </UiTypography>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LearningOutcome',
  props: {
    loName: {
      type: String,
      required: true
    },
    loDescription: {
      type: String,
      required: true
    },
    loNameColor: {
      type: String,
      required: true
    }
  }
})
</script>
