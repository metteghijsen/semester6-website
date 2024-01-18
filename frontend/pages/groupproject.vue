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
              v-if="selectedLo.includes('lo6') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="postersession"
              lo6
              lo7
              deliverable-name="Poster Session"
              image-name="postersession"
              deliverable-description="Bij de start van ons groepsproject stond het maken van een poster over ons project op de agenda. In dit verslag leg ik uit hoe ik dit heb aangepakt."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo4') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="projectplangroup"
              lo4
              lo5
              lo7
              deliverable-name="Projectplan"
              image-name="projectplangroup"
              deliverable-description="Om de opdracht meer context te geven en effectief te communiceren met elkaar, onze docenten en de stakeholders over de planning voor de komende weken, hebben we een projectplan opgesteld. "
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo4') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="brainstorming"
              lo4
              lo5
              lo7
              deliverable-name="Brainstorming"
              image-name="brainstorming"
              deliverable-description="Na de briefing van Teague, hebben we met de groep een brainstorm gedaan om ervoor te zorgen dat we allemaal de opdracht goed begrijpen."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="survey"
              lo1
              lo5
              lo7
              deliverable-name="Survey"
              image-name="survey"
              deliverable-description="Om erachter te komen hoe gymdocenten het probleem ervaren, en welke oplossingen ze passend zouden vinden, heb ik een enquête afgenomen bij een aantal gymdocenten."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="expertinterview"
              lo1
              lo5
              lo7
              deliverable-name="Expert Interview"
              image-name="expertinterview"
              deliverable-description="Om erachter te komen hoe we het bewustzijn van gehoorsbeschadigingen het beste kunnen verhogen, heb ik samen met een collega van Grip op Geluid een geluidsspecialist geïnterviewd."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="moodboard"
              lo1
              lo5
              lo7
              deliverable-name="Moodboard UI/UX"
              image-name="moodboard"
              deliverable-description="Om inspiratie op te doen voor een ontwerp voor onze app, heb ik samen met Sef een moodboard gemaakt. Hier kun je daar meer over lezen."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="requirements"
              lo1
              lo5
              lo7
              deliverable-name="Requirements"
              image-name="requirements"
              deliverable-description="Om erachter te komen welke functies de gebruiker graag in de app wilt, hebben we een lijst met requirements opgesteld."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="moscow"
              lo1
              lo5
              lo7
              deliverable-name="MoSCoW"
              image-name="moscow"
              deliverable-description="Om erachter te komen welke requirements we het beste kunnen implementeren, hebben we de MoSCoW methode uitgevoerd."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="paperprototyping"
              lo1
              lo5
              lo7
              deliverable-name="Paper prototyping"
              image-name="paperprototyping"
              deliverable-description="Om de requirements op een laagdrempelige manier te visualiseren, heb ik een paper prototype van de app gemaakt."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.length === 0"
              to="wireframinggos"
              lo1
              lo2
              deliverable-name="Wireframing (pre-brandguide)"
              image-name="wireframing2"
              deliverable-description="Om ons concept te visualiseren en een idee te krijgen van hoe we de app visueel willen presenteren, besloten we aparte wireframes te maken die we later zouden combineren tot een definitieve versie."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo5
              to="colorresearch2"
              deliverable-name="Color Research"
              image-name="colorresearch2"
              deliverable-description="Om erachter te komen welke kleuren we het beste kunnen gebruiken in onze app, heb ik een kleuronderzoek uitgevoerd."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo5') || selectedLo.includes('lo6') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="brandguide"
              lo1
              lo5
              lo6
              lo7
              deliverable-name="Brandguide Noise Control"
              image-name="brandguide"
              deliverable-description="Om al onze verschillende ontwerpen en ideeën samen te voegen, hebben Luc en ik gewerkt aan het opstellen van een brandguide. "
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo7') || selectedLo.length === 0"
              to="weyweyweb"
              lo7
              deliverable-name="Wey Wey Web Malaga"
              image-name="weyweyweb"
              deliverable-description="Van 22 t/m 25 november ben ik naar de Wey Wey Web conferentie in Malaga geweest. In dit document kun je meer lezen over de talks en workshops die ik heb gevolgd, en wat ik hiervan geleerd heb."
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.length === 0"
              lo1
              lo2
              to="components"
              deliverable-name="Components"
              image-name="components"
              deliverable-description="Om ervoor te zorgen dat de designs van de hele projectgroep ongeveer dezelfde stijl aanhouden, heb ik een aantal componenten samengesteld."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.length === 0"
              to="wireframing2"
              lo1
              lo2
              deliverable-name="Wireframing (na brandguide)"
              image-name="wireframing3"
              deliverable-description="Nadat Luc en ik de brandguide hadden opgesteld, en ik de componenten had samengesteld, werd het tijd om één groot design te maken om alle ideeën te combineren."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo2
              lo5
              to="abctesting"
              deliverable-name="A/B/C Testing"
              image-name="abctesting"
              deliverable-description="Om te bepalen welk ontwerp van de Daily Dose pagina het meest geschikt is om te implementeren, heb ik een A/B/C test afgenomen."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo1') || selectedLo.includes('lo2') || selectedLo.includes('lo5') || selectedLo.length === 0"
              lo1
              lo2
              lo5
              to="usertesting"
              deliverable-name="Usertesting"
              image-name="usertesting2"
              deliverable-description="Samen met Juliën heb ik een gebruikerstest opgezet in Maze om de UI van onze Noise Control app te optimaliseren. Tijdens deze test hebben we de eerste versie van onze UI getest met behulp van vragen en scenario’s."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo6') || selectedLo.length === 0"
              lo6
              to="peerfeedback"
              deliverable-name="Peer Feedback"
              image-name="peerfeedback"
              deliverable-description="Om te reflecteren op mijn eigen werkhouding en om te kijken of we als projectgroep onze houding kunnen verbeteren, heb ik een peer review sessie georganiseerd."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo6') || selectedLo.length === 0"
              lo6
              to="Retrospective"
              deliverable-name="Retrospective"
              image-name="retrospective"
              deliverable-description="Om te reflecteren op ons groepswerk, hebben we na elke sprint een retrospective georganiseerd."
              project-type="Grip on Sound"
              project-people="group"
            />

            <UiDeliverable
              v-if="selectedLo.includes('lo4') || selectedLo.includes('lo7') || selectedLo.length === 0"
              to="adviesrapport"
              lo4
              lo7
              deliverable-name="Adviesrapport"
              image-name="adviesrapport"
              deliverable-description="Om de stakeholder goed te informeren over onze bezigheden gedurende de afgelopen 12 weken, hebben ik samen met de projectgroep een adviesrapport opgesteld."
              project-type="Grip on Sound"
              project-people="group"
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
