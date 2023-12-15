<template>
  <div>
    <UiContainer>
      <div>
        <LayoutTaskbar />
        <div class="pb-4">
          <div class="flex flex-row">
            <div class="w-[450px] pr-1" title="You analyse the user, the user interaction and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design.">
              <UiFilterButton color="red100" label="UI (Analysis & Advice)" @click="filterLearningOutcome('lo1')" />
            </div>
            <div class="w-[450px] pr-1" title="You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders.">
              <UiFilterButton color="orange100" label="UI (Execution & Validation)" @click="filterLearningOutcome('lo2')" />
            </div>
            <div class="w-[475px]" title="You create & design software with existing components or libraries using predetermined quality criteria and version control.">
              <UiFilterButton color="yellow100" label="Software Design & Realisation" @click="filterLearningOutcome('lo3')" />
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-[500px] pr-1" title="You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan.">
              <UiFilterButton color="green100" label="Future Oriented Organisation" @click="filterLearningOutcome('lo4')" />
            </div>
            <div class="w-[475px] pr-1" title="You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices.">
              <UiFilterButton color="blue100" label="Investigative Problem Solving" @click="filterLearningOutcome('lo5')" />
            </div>
            <div class="w-[375px]" title="You methodically reflect on your professional identity and personal development.">
              <UiFilterButton color="purple100" label="Personal Leadership" @click="filterLearningOutcome('lo6')" />
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-[475px]" title="You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context.">
              <UiFilterButton color="pink100" label="Goal-oriented interaction" @click="filterLearningOutcome('lo7')" />
            </div>
          </div>
        </div>

        <div v-motion-slide-bottom class="md:grid md:grid-cols-3 md:gap-1">
          <UiDeliverable
            v-if="selectedLo.includes('lo7') || selectedLo.length === 0"
            to="ddw"
            lo7
            deliverable-name="Dutch Design Week"
            image-name="ddw2"
            deliverable-description="Van 23 t/m 25 oktober ben ik samen met mijn projectgroep en een Canadese student naar de Dutch Design Week geweest. In dit document kun je hier meer over lezen."
            project-type="Dutch Design Week (International Project)"
            project-people="group"
          />

          <UiDeliverable
            v-if="selectedLo.includes('lo7') || selectedLo.length === 0"
            to="architecturemuseum"
            lo7
            deliverable-name="Architecture Museum"
            image-name="architecturemuseum"
            deliverable-description="Tijdens de herfstvakantie heb ik een reis gemaakt naar Kopenhagen. Hier heb ik het architectuur museum bekeken. Hier kun je een aantal dingen lezen die me opvielen."
          />

          <UiDeliverable
            v-if="selectedLo.includes('lo7') || selectedLo.length === 0"
            to="designmuseum"
            lo7
            deliverable-name="Design Museum"
            image-name="designmuseum"
            deliverable-description="Tijdens de herfstvakantie heb ik een reis gemaakt naar Kopenhagen. Hier heb ik het design museum bekeken. Hier kun je een aantal dingen lezen die me opvielen."
          />

          <UiDeliverable
            v-if="selectedLo.includes('lo7') || selectedLo.length === 0"
            to="weyweyweb"
            lo7
            deliverable-name="Wey Wey Web Malaga"
            image-name="weyweyweb"
            deliverable-description="Van 22 t/m 25 november ben ik naar de Wey Wey Web conferentie in Malaga geweest. In dit document kun je meer lezen over de talks en workshops die ik heb gevolgd, en wat ik hiervan geleerd heb."
          />
        </div>

        <div class="flex flex-col">
          <UiLearningOutcome v-if="selectedLo.includes('lo1')" lo-name-color="text-red100" lo-name="User Interaction (Analysis & Advice)" lo-description="You analyse the user, the user interaction and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design." />
          <UiLearningOutcome v-if="selectedLo.includes('lo2')" lo-name-color="text-orange100" lo-name="User Interaction (Execution & Validation)" lo-description="You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders." />
          <UiLearningOutcome v-if="selectedLo.includes('lo4')" lo-name-color="text-green100" lo-name="Future-oriented organisation" lo-description="You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan." />
          <UiLearningOutcome v-if="selectedLo.includes('lo3')" lo-name-color="text-yellow100" lo-name="Software design and realisation" lo-description="You create & design software with existing components or libraries using predetermined quality criteria and version control." />
          <UiLearningOutcome v-if="selectedLo.includes('lo5')" lo-name-color="text-blue100" lo-name="Investigative problem solving" lo-description="You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices." />
          <UiLearningOutcome v-if="selectedLo.includes('lo6')" lo-name-color="text-purple100" lo-name="Personal leadership " lo-description="You methodically reflect on your professional identity and personal development.  " />
          <UiLearningOutcome v-if="selectedLo.includes('lo7')" lo-name-color="text-pink100" lo-name="Goal-oriented interaction " lo-description="You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context. " />
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLo: [] // Here, store the selected learning outcomes in an array
    }
  },
  beforeUnmount () {
    // Save the scroll position to a cookie before the component is destroyed
    document.cookie = `scrollTop=${window.scrollY}; path=/`
  },
  methods: {
    filterLearningOutcome (selectedLo) {
      // Add or remove the selected LO from the array
      if (!this.selectedLo.includes(selectedLo)) {
        this.selectedLo.push(selectedLo)
      } else {
        const index = this.selectedLo.indexOf(selectedLo)
        if (index !== -1) {
          this.selectedLo.splice(index, 1)
        }
      }
    }
  }
}
</script>
