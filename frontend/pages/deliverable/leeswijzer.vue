<template>
  <div>
    <UiContainer>
      <div class="h-full ">
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
          <b>Versie 1.0 (29-09-2023)</b><br>
          Eerste opzet.
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
          <br><br>
          <b>Versie 1.1 (9-11-2023)</b><br>
          Extra deliverables, en documentatie groepsproject toegevoegd.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk leeswijzer versie 1.1"
                primary
                regular
                arrow
                to="/documents/leeswijzerv1.1.pdf"
                target="_blank"
              />
            </div>
          </div>
          <br><br>
          <b>Versie 1.2 (10-11-2023)</b><br>
          Conclusie & reflectie geschreven bij personal project.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk leeswijzer versie 1.2"
                primary
                regular
                arrow
                to="/documents/leeswijzerv1.2.pdf"
                target="_blank"
              />
            </div>
          </div>
          <br><br>
          <b>Versie 1.3 (15-12-2023)</b><br>
          Extra deliverables toegevoegd.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk leeswijzer versie 1.3"
                primary
                regular
                arrow
                to="/documents/leeswijzerv1.3.pdf"
                target="_blank"
              />
            </div>
          </div>
          <br><br>
          <b>Versie 1.4 (19-01-2024)</b><br>
          Extra deliverables toegevoegd. Conclusie & reflectie geschreven bij group project.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk leeswijzer versie 1.4"
                primary
                regular
                arrow
                to="/documents/leeswijzerv1.4.pdf"
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
