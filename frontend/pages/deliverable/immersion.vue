<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox add-header header="Immersion" title="Inleiding" lo1 lo5>
          In dit document beschrijf ik de uitvoering van de Immersion onderzoeksmethode op een reeks portfolio-websites. Mijn selectie omvatte specifiek websites van voormalige studenten die dit semester succesvol hebben afgerond. Tijdens dit onderzoek lag de focus voornamelijk op de bruikbaarheid van deze websites. Ik analyseerde welke elementen deze studenten gebruikten, hoe ze ervoor kozen om hun werk te presenteren en op welke manier de navigatie op de site was vormgegeven.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          Ik heb de websites van Jordi Franssen en Merlijn Wilders geanalyseerd. Jordi's portfolio heeft een knop voor leeruitkomsten, maar het vereist veel klikken en scrollen om de gewenste informatie te vinden. Er ontbreekt een overzicht van alle deliverables, wat het moeilijker maakt om te navigeren en te zien wat een student heeft opgeleverd per leeruitkomst. De site van Jordi oogt erg prettig, maar de gebruiksvriendelijkheid kan verbeterd worden.
          <br><br>Merlijn daarentegen heeft alle deliverables op één pagina met een handige contentfilter. Dit maakt het gemakkelijk om te zien welke deliverables bij welke projecten horen, vooral handig voor docenten. Hij heeft ook een leeswijzer op de homepage, wat ontbreekt bij Jordi. Het gebruik van afzonderlijke pagina's voor elke deliverable met links naar PDF-bestanden biedt gedetailleerde informatie, een functie die ik miste bij Jordi.
          Kortom, Merlijn's portfolio scoort punten voor gebruiksgemak en handige functies voor docenten. Ik overweeg elementen van zijn aanpak te integreren in mijn eigen website.

          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/immersion.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Jordi's website heeft me vooral geïnspireerd door zijn esthetische design en de handige taakbalk die continu zichtbaar blijft. Deze elementen zal ik zeker opnemen in mijn eigen portfolio-website, omdat ze zorgen voor visuele aantrekkelijkheid, en een consistente navigatie-ervaring bieden voor gebruikers.
          Daarnaast ben ik sterk beïnvloed door Merlijn's aanpak om alle deliverables op één pagina te plaatsen. Met behulp van een contentfilter kunnen al deze deliverables dan gefilterd worden op project en/of leeruitkomst. Ook wil ik voor elke deliverable een afzonderlijke pagina aanmaken waar alle benodigde informatie op staat. Dit is een benadering die ik eerder heb toegepast en waar ik erg prettig mee kan werken. Het biedt een duidelijke structuur voor het presenteren van mijn werk en stelt bezoekers in staat om snel specifieke informatie te vinden.
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
