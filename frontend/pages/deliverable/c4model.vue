<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="C4 Model"
          title="Inleiding"
          personal
          lo1
          lo3
          lo5
          lo7
          workshop
        >
          Voor het ontwikkelen van mijn website wil ik gebruik maken van Nuxt3 in combinatie met Tailwind. Om te bepalen hoe mijn site er softwarematig uit gaat zien, heeft Bardt mij geadviseerd om een C4 model te maken. In dit document kun je lezen hoe ik dit C4 model heb opgesteld, en welke feedback ik heb ontvangen van Bardt.
        </UiTextbox>
        <UiTextbox
          add-image
          image-name="c4model"
          title="Samenvatting"
        >
          Op advies van Bardt bezocht ik de website <a target="_blank" href="https://c4model.com/" class="text-darkblue100 italic">https://c4model.com/</a> om het C4-model en zijn lagen te bestuderen. Met behulp van de voorbeelden op de site heb ik mijn eerste C4-model gemaakt, gericht op mijn portfolio-website. Tussendoor heb ik Bardt nog om feedback gevraagd, en ik heb het model kunnen verbeteren met behulp van de punten die hij benoemde.

          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/c4model.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Dankzij de bron die ik heb bezocht, en de feedback van Bardt, heb ik nu mijn allereerste C4 model kunnen maken. Het lijkt me verstandig om deze techniek vaker toe te passen, om op een overzichtelijke manier aan collega’s of stakeholders de architectuur van een website duidelijk te maken. Ik kan me voorstellen dat dit vooral handig is bij grotere, complexere projecten.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 1: User Interaction (Analysis & Advice)</b> <br>
          You analyse the user, the user interaction and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br><br>
          •	<b> Learning outcome 3: Software design and realisation</b> <br>
          You create & design software with existing components or libraries using predetermined quality criteria and version control. <br><br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br><br>
          •	<b> Learning outcome 7: Goal-oriented interaction </b> <br>
          You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context.
        </UiTextbox>
        <div class="flex justify-center">
          <div class="w-[400px] my-2">
            <UiButton label="back to overview" primary big arrow to="/deliverables" />
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
