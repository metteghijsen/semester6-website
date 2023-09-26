<template>
  <div class="bg-white100 w-full rounded-3xl mb-2 flex">
    <div class="pl-7">
      <div v-if="addHeader">
        <UiTypography type="h4" size="heading3" class="pt-8">
          {{ header }}
        </UiTypography>
        <div class="flex flex-row">
          <div v-if="lo1">
            <UiLearningOutcomeBullet color="red100" bg-color="red40" label="UI (Analysis & Advice)" title="You analyse the user, the user interaction and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design." />
          </div>
          <div v-if="lo2">
            <UiLearningOutcomeBullet color="orange100" bg-color="orange40" label="User Interaction (Execution & Validation)" title="You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders." />
          </div>
          <div v-if="lo3">
            <UiLearningOutcomeBullet color="yellow100" bg-color="yellow40" label="Software Design and Realisation" title="You create & design software with existing components or libraries using predetermined quality criteria and version control." />
          </div>
          <div v-if="lo4">
            <UiLearningOutcomeBullet color="green100" bg-color="green40" label="Future-oriented Organisation" title="You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan." />
          </div>
          <div v-if="lo5">
            <UiLearningOutcomeBullet color="blue100" bg-color="blue40" label="Investigative Problem Solving" title="You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices." />
          </div>
          <div v-if="lo6">
            <UiLearningOutcomeBullet color="purple100" bg-color="purple40" label="Personal Leadership" title="You methodically reflect on your professional identity and personal development." />
          </div>
          <div v-if="lo7">
            <UiLearningOutcomeBullet color="pink100" bg-color="pink40" label="Goal-oriented interaction" title="You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context." />
          </div>
        </div>
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
        color="text-black60"
        class="pt-2 pr-4 pb-8"
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
    addHeader: Boolean,
    addImage: Boolean,
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
