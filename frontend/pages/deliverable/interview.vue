<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox add-header header="Interview" title="Inleiding" lo1 lo5>
          In dit document kun je lezen over hoe ik een interview heb uitgevoerd met een student die semester 6 ICT & Media Design succesvol heeft afgerond (Jordi Franssen). Het doel van dit interview is om erachter te komen hoe ik een portfolio kan ontwikkelen dat niet alleen mijn prestaties weerspiegelt, maar ook een moeiteloze en verhelderende ervaring biedt voor mijn beoordelaars.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          In voorbereiding op het onderzoek, heb ik een lijst met vragen samengesteld, waarbij ik meerdere overwegingen heb gemaakt met betrekking tot wat ik wilde weten. Daarnaast heb ik waardevolle feedback van Constanze meegenomen over hoe ik de kwaliteit van mijn werk het beste kon demonstreren. Ik was ook nieuwsgierig naar Jordi's aanpak op dit gebied en heb hem daarover ondervraagd. In de PDF vind je een beknopt overzicht van de vragen en bijbehorende antwoorden. Hieronder kun je het interview ook beluisteren.

          <audio class="mt-2 w-[450px]" controls src="/audio/jordi.mp3" />

          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/interviewjordi.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Het is belangrijk dat in je portfolio de kwaliteit van je werk helder naar voren komt. Het kan
          daarom nuttig zijn om een samenvatting te schrijven bij elk project, wat docenten
          helpt om snel de essentie te begrijpen. Wat betreft de technische aspecten, heb
          ik geleerd dat het bouwen van je eigen portfolio, als je technische vaardigheden
          dat toelaten, meer controle en flexibiliteit kan bieden dan webscraping.
          Doelgroepgerichtheid is ook van essentieel belang. Een eenvoudige en intuïtieve
          navigatiestructuur, met minimale scroll- en klikvereisten, vergemakkelijkt de
          toegang tot informatie voor docenten.
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
