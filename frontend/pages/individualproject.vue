<template>
  <div>
    <UiContainer>
      <div>
        <LayoutTaskbar />
        <div class="pb-4 lg:block flex justify-center flex-col items-center w-full">
          <div class="flex lg:flex-row flex-col lg:items-start items-center">
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
          <div class="flex lg:flex-row flex-col lg:items-start items-center">
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

        <div class="flex justify-center flex-col">
          <div v-motion-slide-bottom class="grid lg:grid-cols-3 gap-1 md:grid-cols-2 grid-cols-1">
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
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo5
              to="literaturestudy"
              deliverable-name="Trend Analyse"
              image-name="libraryresearch"
              deliverable-description="Dit document presenteert de resultaten van een literatuurstudie die ik heb uitgevoerd om een dieper inzicht te verkrijgen in de huidige designtrends die worden toegepast in portfolio's. "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo5
              to="colorresearch"
              deliverable-name="Color Research"
              image-name="colorresearch"
              deliverable-description="Ik heb een onderzoek uitgevoerd naar pastelkleuren. In dit document ga ik hier dieper op in."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo5
              to="immersion"
              deliverable-name="Immersion"
              image-name="immersion"
              deliverable-description="Dit document beschrijft de uitvoering van de Immersion-onderzoeksmethode op recent afgestudeerde studentenportfolio-websites."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo5
              to="interview"
              deliverable-name="Interview"
              image-name="interviewjordi"
              deliverable-description="In dit document kun je lezen over hoe ik een interview heb uitgevoerd met een student die semester 6 ICT & Media Design succesvol heeft afgerond. "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.length === 0"
              lo1
              lo2
              to="wireframes"
              deliverable-name="Wireframing"
              image-name="wireframing"
              deliverable-description="Dit document biedt inzicht in het proces dat ik heb doorlopen bij het ontwerpen van mijn portfolio-website.  "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo2
              lo5
              to="usertests"
              deliverable-name="Usertesting"
              image-name="usertesting"
              deliverable-description="In dit document kun je lezen hoe ik gebruikerstesten heb afgenomen op het interactieve prototype van mijn portfolio-website. "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo2
              lo5
              to="abtesting"
              deliverable-name="A/B Testing"
              image-name="abtesting"
              deliverable-description="In dit document kun je lezen hoe ik A/B testen heb afgenomen op het interactieve prototype van mijn portfolio-website. "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              lo1
              lo3
              lo5
              lo7
              to="c4model"
              deliverable-name="C4 Model"
              image-name="c4model"
              deliverable-description="Dit document gaat verder in op het C4 model wat ik heb gemaakt voor mijn portfolio-website."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo2') || selectedLo.includes('lo3') || selectedLo.includes('lo6') || selectedLo.length === 0"
              lo2
              lo3
              lo6
              to="developmentwebsite"
              deliverable-name="Development Website"
              image-name="developmentwebsite"
              deliverable-description="In dit document kun je lezen over het proces dat ik heb doorlopen bij het ontwikkelen van het interactieve prototype van mijn portfolio-website. "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if=" selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo3
              lo5
              to="pipeline"
              deliverable-name="Pipeline"
              image-name="pipeline"
              deliverable-description="In dit document kun je lezen hoe ik een eigen pipeline heb gebouwd om zo makkelijker documentatie te kunnen uploaden naar mijn portfolio-website."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if=" selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo3
              lo5
              to="darkmode"
              deliverable-name="Dark theme"
              image-name="darkmode"
              deliverable-description="Om mezelf uit te dagen, en me verder te verdiepen in de mogelijkheden van Tailwind en Nuxt, heb ik besloten een dark theme te implementeren in mijn website."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if=" selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo3
              lo5
              to="lucide"
              deliverable-name="Lucide Icons"
              image-name="lucide"
              deliverable-description="Om mijn workflow te verbeteren, en mijn site er beter uit te laten zien, heb ik besloten om Lucide Icons te integreren. Dit is een veelzijdige icoonbibliotheek die tijdens een gesprek met Luc ter sprake kwam."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if=" selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo3
              lo5
              to="vueautocounter"
              deliverable-name="Vue Autocounter"
              image-name="vueautocounter"
              deliverable-description="Om mijn developmentvaardigheden te verbeteren, en mijn website meer eigen te maken, heb ik geprobeerd om een autocounter toe te voegen op de homepagina. "
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if=" selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo3
              lo5
              to="responsive"
              deliverable-name="Responsiveness"
              image-name="responsive"
              deliverable-description="Omdat ik meer van de development leeruitkomst wilde laten zien, kreeg ik het advies van mijn semestercoach om mijn portfolio website responsive te maken. Met de kennis die ik tijdens mijn stage heb opgedaan, ben ik deze uitdaging aangegaan."
              project-type="Personal Project"
              project-people="individual"
            />

            <UiDeliverable
              v-if=" selectedLo.includes('lo3') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo3
              lo5
              to="apiexperiment"
              deliverable-name="API Experiment"
              image-name="apiexperiment"
              deliverable-description="Om mijn kennis over Vue uit te breiden, heb ik besloten om te experimenteren met het gebruiken van API’s. Ik heb een POC (Proof of Concept) gemaakt met de Dog API."
              project-type="Personal Project"
              project-people="individual"
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
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>

<script>

export default {
  data () {
    return {
      selectedLo: [] // Hier worden de geselecteerde learning outcomes opgeslagen in een array
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
    }
  }
}
</script>
