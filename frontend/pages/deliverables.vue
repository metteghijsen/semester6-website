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

          <!-- <UiDeliverable
            v-if="selectedLo.includes('lo6') || selectedLo.includes('lo7') || selectedLo.length === 0"
            lo6
            lo7
            to="/"
            deliverable-name="Feedback personal project"
            image-name="feedbackportfolio"
            deliverable-description="In dit document kun je lezen over de feedbackrondes die ik heb gehad over mijn persoonlijke portfolio. "
            project-type="Personal Project"
            project-people="individual"
          /> -->

          <UiDeliverable
            v-if="selectedLo.includes('lo4') || selectedLo.includes('lo5') || selectedLo.includes('lo7') || selectedLo.length === 0"
            to="leeswijzer"
            lo4
            lo5
            lo7
            deliverable-name="Leeswijzer"
            image-name="readingguide"
            deliverable-description="In dit document kun je de iteraties van mijn leeswijzer inzien. "
          />

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
            deliverable-description="Om ervoor te zorgen dat de designs van de hele projectgroep ongeveer dezelfde stijl aanhouden, heb ik een aantal componenten samengesteld.
       "
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
            v-if="selectedLo.includes('lo6') || selectedLo.length === 0"
            lo6
            to="peerfeedback"
            deliverable-name="Peer Feedback"
            image-name="peerfeedback"
            deliverable-description="Om te reflecteren op mijn eigen werkhouding en om te kijken of we als projectgroep onze houding kunnen verbeteren, heb ik een peer review sessie georganiseerd.
       "
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
