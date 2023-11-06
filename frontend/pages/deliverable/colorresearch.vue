<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Color Research"
          title="Inleiding"
          lo1
          lo5
          library
        >
          Dit onderzoek heeft als doel de impact van pastelkleuren in webdevelopment op de gebruikerservaring te analyseren. Eerder voerde ik een trendanalyse uit om inspiratie op te doen voor de ontwikkeling van mijn portfolio, waarbij opviel dat pastelkleuren een prominente trend zijn in modern webdesign. Pastelkleuren zijn zachte, minder verzadigde tinten van kleuren die bekend staan om hun rustgevende en esthetische aantrekkingskracht.    Dit document presenteert de resultaten van een literatuurstudie die ik heb uitgevoerd om een dieper inzicht te verkrijgen in de huidige designtrends die worden toegepast in portfolio's. Het hoofddoel van dit onderzoek was om inspiratie op te doen voor het ontwikkelen van mijn eigen portfolio. Als onderzoeker heb ik verschillende bronnen grondig bestudeerd en relevante inzichten en bevindingen verzameld.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          Pastelkleuren zijn zachtere, minder verzadigde tinten van kleuren, vaak beschreven als "melkachtig", "wasachtig", of "moe". Deze kleuren hebben een hogere waarde en lagere verzadiging dan hun meer verzadigde tegenhangers. <br><br>

          Pastelkleuren dragen bij aan een verbeterde leesbaarheid van tekst op een website, doordat ze een zachtheid bieden die een gemakkelijker te verwerken contrast oplevert. Bovendien hebben pastelkleuren het vermogen om gevoelens van warmte, comfort en vertrouwen op te wekken bij gebruikers, wat resulteert in een positievere perceptie van een website. Daarnaast zijn pastelkleuren minder vermoeiend voor de ogen, waardoor gebruikers langer betrokken blijven bij de website en dit bijdraagt aan een comfortabelere visuele ervaring

          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/kleuronderzoek.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Het gebruik van pastelkleuren in webdevelopment kan een positieve impact hebben op de gebruiker door een verbeterde leesbaarheid, een sterkere emotionele band en een comfortabelere visuele ervaring te bieden.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br><br>
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
