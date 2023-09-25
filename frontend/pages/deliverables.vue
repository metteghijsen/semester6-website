<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />

        <div class="pb-4">
          <div class="flex flex-row">
            <div class="w-[450px] pr-1">
              <UiFilterButton color="red100" label="UI (Analysis & Advice)" @click="filterLearningOutcome('lo1')" />
            </div>
            <div class="w-[450px] pr-1">
              <UiFilterButton color="orange100" label="UI (Execution & Validation)" @click="filterLearningOutcome('lo2')" />
            </div>
            <div class="w-[475px]">
              <UiFilterButton color="yellow100" label="Software Design & Development" @click="filterLearningOutcome('lo3')" />
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-[500px] pr-1">
              <UiFilterButton color="green100" label="Future Oriented Organisation" @click="filterLearningOutcome('lo4')" />
            </div>
            <div class="w-[475px] pr-1">
              <UiFilterButton color="blue100" label="Investigative Problem Solving" @click="filterLearningOutcome('lo5')" />
            </div>
            <div class="w-[375px]">
              <UiFilterButton color="purple100" label="Personal Leadership" @click="filterLearningOutcome('lo6')" />
            </div>
          </div>
          <div class="flex flex-row">
            <div class="w-[475px]">
              <UiFilterButton color="pink100" label="Goal-oriented interaction" @click="filterLearningOutcome('lo7')" />
            </div>
          </div>
        </div>

        <div class="md:grid md:grid-cols-3 md:gap-1">
          <UiDeliverable
            v-if="selectedLo.includes('lo4') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
            lo4
            lo5
            lo7
            to="projectplan"
            deliverable-name="Projectplan"
            image-name="projectplan"
            deliverable-description="In dit document beschrijf ik mijn persoonlijke projectplan, en beschrijf ik het proces dat ik heb doorlopen bij het samenstellen van dit plan."
            project-type="Personal Project"
          />

          <UiDeliverable
            v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"

            lo="lo1 lo5"
            lo1
            lo5
            to="literaturestudy"
            deliverable-name="Literature Study"
            image-name="libraryresearch"
            deliverable-description="Dit document presenteert de resultaten van een literatuurstudie die ik heb uitgevoerd om een dieper inzicht te verkrijgen in de huidige designtrends die worden toegepast in portfolio's. "
            project-type="Personal Project"
          />

          <UiDeliverable
            v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
            lo="lo1 lo5"
            lo1
            lo5
            to="immersion"
            deliverable-name="Immersion"
            image-name="immersion"
            deliverable-description="Dit document beschrijft de uitvoering van de Immersion-onderzoeksmethode op recent afgestudeerde studentenportfolio-websites."
            project-type="Personal Project"
          />

          <UiDeliverable
            v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
            lo="lo1 lo5"
            lo1
            lo5
            to="interview"
            deliverable-name="Interview"
            image-name="interviewjordi"
            deliverable-description="In dit document kun je lezen over hoe ik een interview heb uitgevoerd met een student die semester 6 ICT & Media Design succesvol heeft afgerond. "
            project-type="Personal Project"
          />

          <UiDeliverable
            lo1
            lo2
            to="wireframes"
            deliverable-name="Wireframing"
            image-name="wireframing"
            deliverable-description="Dit document biedt inzicht in het proces dat ik heb doorlopen bij het ontwerpen van mijn portfolio-website.  "
            project-type="Personal Project"
          />

          <!-- <UiDeliverable
            lo1
            lo2
            to="/"
            deliverable-name="Usertesting"
            image-name="usertesting"
            deliverable-description="In dit document kun je lezen hoe ik gebruikerstesten heb afgenomen op het interactieve prototype van mijn portfolio-website. "
            project-type="Personal Project"
          />

          <UiDeliverable
            lo2
            lo3
            to="/"
            deliverable-name="Development Website"
            image-name="developmentwebsite"
            deliverable-description="In dit document kun je lezen over het proces dat ik heb doorlopen bij het ontwikkelen van mijn portfolio-website. "
            project-type="Personal Project"
          /> -->

          <!-- <UiDeliverable
            lo6
            lo7
            to="/"
            deliverable-name="Feedback personal project"
            image-name="feedbackportfolio"
            deliverable-description="In dit document kun je lezen over de feedbackrondes die ik heb gehad over mijn persoonlijke portfolio. "
            project-type="Personal Project"
          /> -->
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
      selectedLo: [] // Hier wordt de geselecteerde learning outcomes opgeslagen als een array
    }
  },
  methods: {
    filterLearningOutcome (selectedLo) {
      // Voeg de geselecteerde LO toe aan de array
      if (!this.selectedLo.includes(selectedLo)) {
        this.selectedLo.push(selectedLo)
      } else {
        // Verwijder de LO als deze al is geselecteerd (toggle)
        const index = this.selectedLo.indexOf(selectedLo)
        if (index !== -1) {
          this.selectedLo.splice(index, 1)
        }
      }
      console.log(this.selectedLo)
    }
  }
}
</script>
