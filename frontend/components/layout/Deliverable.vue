<template>
  <NuxtLink :to="to">
    <div class="bg-white100 h-[720px] w-[460px] flex flex-col rounded-3xl relative m-0.5">
      <div class="flex justify-center">
        <NuxtImg :src="`/img/deliverables/${imageName}.png`" :alt="imageName" class="w-[443px] m-1.5 rounded-3xl" />
      </div>
      <div class="flex">
        <div class="flex flex-col pl-1.5">
          <div v-if="lo1" class="rounded-full bg-red100 w-2 h-2 my-0.5" />
          <div v-if="lo2" class="rounded-full bg-orange100 w-2 h-2 my-0.5" />
          <div v-if="lo3" class="rounded-full bg-yellow100 w-2 h-2 my-0.5" />
          <div v-if="lo4" class="rounded-full bg-green100 w-2 h-2 my-0.5" />
          <div v-if="lo5" class="rounded-full bg-blue100 w-2 h-2 my-0.5" />
          <div v-if="lo6" class="rounded-full bg-purple100 w-2 h-2 my-0.5" />
          <div v-if="lo4" class="rounded-full bg-pink100 w-2 h-2 my-0.5" />
        </div>
        <div class="flex flex-col ml-2.5">
          <UiTypography type="h4" size="heading4">
            {{ deliverableName }}
          </UiTypography>
          <UiTypography type="p" size="paragraph-small">
            {{ deliverableDescription }}
          </UiTypography>
        </div>
      </div>
      <UiTypography type="p" size="paragraph-extra-small" class="absolute bottom-2 left-7 italic opacity-40">
        {{ projectType }}
      </UiTypography>
    </div>
  </NuxtLink>
</template>

<script lang="ts">
export default defineComponent({
  name: 'Deliverable',
  props: {
    imageName: {
      type: String,
      required: true
    },
    deliverableName: {
      type: String,
      required: true
    },
    deliverableDescription: {
      type: String,
      required: true
    },
    projectType: {
      type: String,
      required: true
    },
    to: {
      type: String,
      required: true
    },
    lo1: Boolean,
    lo2: Boolean,
    lo3: Boolean,
    lo4: Boolean,
    lo5: Boolean,
    lo6: Boolean,
    lo7: Boolean
  }
})
</script>
