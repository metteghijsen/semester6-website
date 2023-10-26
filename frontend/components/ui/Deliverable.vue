<template>
  <NuxtLink :to="`/deliverable/${to}`">
    <div class="bg-white100 h-[700px] w-[460px] flex flex-col rounded-3xl relative m-0.5 hover:-translate-y-2 transition-all ease-in-out">
      <div class="relative">
        <div class="flex justify-center">
          <NuxtImg :src="`/img/deliverables/${imageName}.png`" :alt="imageName" class="w-[443px] m-1.5 rounded-3xl" />
        </div>
        <div v-if="projectType" class="absolute left-3 bottom-3 bg-black50 w-max rounded-2xl h-3 px-2 flex justify-center items-center">
          <NuxtImg :src="`/img/${projectPeople}.png`" :alt="projectPeople" class="mr-1 h-2.5 flex items-center" />
          <UiTypography type="p" size="paragraph-extra-small" color="text-white100">
            {{ projectType }}
          </UiTypography>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col pl-1.5">
          <div v-if="lo1" class="rounded-full bg-red100 w-2 h-2 my-0.5" title="UI (Analysis & Advice)" />
          <div v-if="lo2" class="rounded-full bg-orange100 w-2 h-2 my-0.5" title="UI (Execution & Validation)" />
          <div v-if="lo3" class="rounded-full bg-yellow100 w-2 h-2 my-0.5" title="Software Design & Development" />
          <div v-if="lo4" class="rounded-full bg-green100 w-2 h-2 my-0.5" title="Future Oriented Organisation" />
          <div v-if="lo5" class="rounded-full bg-blue100 w-2 h-2 my-0.5" title="Investigative Problem Solving" />
          <div v-if="lo6" class="rounded-full bg-purple100 w-2 h-2 my-0.5" title="Personal Leadership" />
          <div v-if="lo7" class="rounded-full bg-pink100 w-2 h-2 my-0.5" title="Goal-oriented Interaction" />
        </div>
        <div class="flex flex-col ml-2.5 mr-1.5">
          <UiTypography type="h4" size="heading4">
            {{ deliverableName }}
          </UiTypography>
          <UiTypography type="p" size="paragraph-small">
            {{ deliverableDescription }}
          </UiTypography>
        </div>
      </div>
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
    projectPeople: {
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
