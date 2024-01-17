<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Adviesrapport"
          title="Inleiding"
          griponsound
          lo4
          lo7
        >
          Om de stakeholder goed te informeren over onze bezigheden gedurende de afgelopen 12 weken, hebben ik samen met de projectgroep een adviesrapport opgesteld.
        </UiTextbox>
        <UiTextbox
          title="Proces & Iteraties"
        >
          Ik nam voornamelijk de leiding in het schrijven van het adviesrapport. Ik heb de groep voorzien van de template, en een groot deel van de inhoud gevuld. Ik heb de titelpagina gemaakt, versiebeheer pagina, en de stijling van het document bepaald. Ook heb ik hoofdstuk 1, 3 en 4 volledig geschreven. Hoofdstuk 2 heb ik geschreven tot en met 2.1.3. Hoofstuk 2.2 hebben we met de hele groep geschreven. <br><br>
          <b>Versie 1.0</b>
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk adviesrapport versie 1.0"
                primary
                regular
                arrow
                to="/documents/adviesrapport.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 4: Future-oriented organisation </b> <br>
          You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan. <br><br>
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
