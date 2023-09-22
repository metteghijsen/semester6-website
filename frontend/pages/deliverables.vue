<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-auto">
        <LayoutTaskbar />

        <div class="md:grid md:grid-cols-3 md:gap-1">
          <UiDeliverable
            lo4
            lo5
            lo7
            to="/"
            deliverable-name="Projectplan"
            image-name="projectplan"
            deliverable-description="In dit document beschrijf ik mijn persoonlijke projectplan, en beschrijf ik het proces dat ik heb doorlopen bij het samenstellen van dit plan."
            project-type="Personal Project"
          />

          <UiDeliverable
            lo1
            lo5
            to="/"
            deliverable-name="Literature Study"
            image-name="libraryresearch"
            deliverable-description="Dit document presenteert de resultaten van een literatuurstudie die ik heb uitgevoerd om een dieper inzicht te verkrijgen in de huidige designtrends die worden toegepast in portfolio's. "
            project-type="Personal Project"
          />

          <UiDeliverable
            lo1
            lo5
            to="/"
            deliverable-name="Immersion"
            image-name="immersion"
            deliverable-description="Dit document beschrijft de uitvoering van de Immersion-onderzoeksmethode op recent afgestudeerde studentenportfolio-websites."
            project-type="Personal Project"
          />

          <UiDeliverable
            lo1
            lo5
            to="/"
            deliverable-name="Interview"
            image-name="interviewjordi"
            deliverable-description="In dit document kun je lezen over hoe ik een interview heb uitgevoerd met een student die semester 6 ICT & Media Design succesvol heeft afgerond. "
            project-type="Personal Project"
          />

          <UiDeliverable
            lo1
            lo2
            to="/"
            deliverable-name="Wireframing"
            image-name="wireframing"
            deliverable-description="Dit document biedt inzicht in het proces dat ik heb doorlopen bij het ontwerpen van mijn portfolio-website.  "
            project-type="Personal Project"
          />

          <UiDeliverable
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
          />

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
