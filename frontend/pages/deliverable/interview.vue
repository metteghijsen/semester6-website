<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox add-header header="Interview" title="Inleiding">
          In dit document kun je lezen over hoe ik een interview heb uitgevoerd met een student die semester 6 ICT & Media Design succesvol heeft afgerond (Jordi Franssen). Het doel van dit interview is om erachter te komen hoe ik een portfolio kan ontwikkelen dat niet alleen mijn prestaties weerspiegelt, maar ook een moeiteloze en verhelderende ervaring biedt voor mijn beoordelaars.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          In voorbereiding op het onderzoek, heb ik een lijst met vragen samengesteld, waarbij ik meerdere overwegingen heb gemaakt met betrekking tot wat ik wilde weten. Daarnaast heb ik waardevolle feedback van Constanze meegenomen over hoe ik de kwaliteit van mijn werk het beste kon demonstreren. Ik was ook nieuwsgierig naar Jordi's aanpak op dit gebied en heb hem daarover ondervraagd. In de PDF vind je een beknopt overzicht van de vragen en bijbehorende antwoorden. Hieronder kun je het interview ook beluisteren.

          <audio class="mt-2" controls src="" />
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Jordi's website heeft me vooral geïnspireerd door zijn esthetische design en de handige taakbalk die continu zichtbaar blijft. Deze elementen zal ik zeker opnemen in mijn eigen portfolio-website, omdat ze zorgen voor visuele aantrekkelijkheid, en een consistente navigatie-ervaring bieden voor gebruikers.
          Daarnaast ben ik sterk beïnvloed door Merlijn's aanpak om alle deliverables op één pagina te plaatsen. Met behulp van een contentfilter kunnen al deze deliverables dan gefilterd worden op project en/of leeruitkomst. Ook wil ik voor elke deliverable een afzonderlijke pagina aanmaken waar alle benodigde informatie op staat. Dit is een benadering die ik eerder heb toegepast en waar ik erg prettig mee kan werken. Het biedt een duidelijke structuur voor het presenteren van mijn werk en stelt bezoekers in staat om snel specifieke informatie te vinden.

          <div class="flex flex-row">
            <div class="w-[300px] my-2 mr-4">
              <UiButton
                label="bekijk PDF"
                primary
                regular
                arrow
                to="/documents/interviewjordi.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br><br>
        </UiTextbox>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
