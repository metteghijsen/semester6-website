<template>
  <div
    class="bg-white100 w-full rounded-3xl mb-2 flex"
    :class="addButton ? 'flex-col' : 'flex-row'"
  >
    <div class="pl-7">
      <div v-if="addHeader">
        <UiTypography type="h4" size="heading3" class="pt-8">
          {{ header }}
        </UiTypography>
      </div>
      <UiTypography
        type="h4"
        size="heading4"
        :class="addHeader ? 'pt-4' : 'pt-8'"
      >
        {{ title }}
      </UiTypography>
      <UiTypography
        type="p"
        class="opacity-50 pt-2 pr-4"
        :class="addButton ? 'pb-4' : 'pb-8'"
      >
        <slot />
      </UiTypography>
    </div>
    <div v-if="addImage" class="flex justify-center items-center">
      <NuxtImg
        :src="`/img/documentation/${imageName}.png`"
        :alt="imageName"
        class="rounded-3xl max-w-[550px] py-2 px-4"
        div
      />
    </div>
    <div v-if="addButton" class="flex px-5 pb-8" :to="to">
      <div class="w-[300px]">
        <UiButton label="view pdf" primary regular arrow />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: 'LearningOutcome',
  props: {
    header: {
      type: String,
      required: false,
      default: 'Heading4'
    },
    title: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: false,
      default: 'placeholder'
    },
    to: {
      type: String,
      required: false
    },
    addHeader: Boolean,
    addImage: Boolean,
    addButton: Boolean
  }
})
</script>
