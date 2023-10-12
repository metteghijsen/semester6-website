<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Leeswijzer"
          title="Inleiding"
          lo4
          lo5
          lo7
        >
          In dit document kun je de iteraties van mijn leeswijzer inzien.
        </UiTextbox>
        <UiTextbox
          title="Iteraties"
        >
          Versie 1.0
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk leeswijzer versie 1.0"
                primary
                regular
                arrow
                to="/documents/leeswijzerv1.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 4: Future-oriented organisation </b> <br>
          You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan. <br><br>
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
