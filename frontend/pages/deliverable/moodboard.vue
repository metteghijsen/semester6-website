<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Moodboard UI/UX"
          title="Inleiding"
          lo1
          lo5
          lo7
          workshop
        >
          Voor ons project 'Grip op Geluid' staan we voor de uitdaging om een applicatie te ontwerpen die gymdocenten ondersteunt bij het bewust worden van geluidsoverlast tijdens gymlessen en bij het nemen van passende maatregelen. Om onze creativiteit te prikkelen en alvast wat ideeën op te doen voor de user interface, hebben mijn projectpartner Sef en ik gezamenlijk een moodboard samengesteld.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          Samen met Sef heb ik me laten inspireren door de user interfaces van vergelijkbare gezondheidsapps. De UI-elementen die ons aanspraken op basis van hun esthetiek, functionaliteit of coolheid, hebben we zorgvuldig geselecteerd en toegevoegd aan ons moodboard. Mijn persoonlijke bijdrage aan het moodboard (de bovenste helft) reflecteert mijn voorkeur voor een levendige en kleurrijke uitstraling van de app.
          <br><br>
          Tijdens dit proces kwam ik op het idee om de dagelijkse dosis geluid die men mag ervaren, visueel te vertegenwoordigen met behulp van een gezicht. Dit concept, dat ik in een andere gezondheidsapp had gezien, maakte me nieuwsgierig vanwege de menselijke emotie die het overbracht in plaats van abstracte percentages. Ik ben van mening dat mensen gemakkelijker kunnen relateren aan emoties dan aan droge statistieken. Natuurlijk realiseren Sef en ik ons dat dit een aspect is dat we in een latere fase van het project nog moeten testen met gebruikers.
          <iframe
            class="mt-4"
            title="miro"
            width="100%"
            height="732"
            src="https://miro.com/app/live-embed/uXjVNcKDVh8=/?moveToViewport=1069,-1003,5769,2682&embedId=251969404243"
            frameborder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowfullscreen
          />
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Na onze brainstormsessie hebben we het moodboard gepresenteerd aan de projectgroep. Gezamenlijk hebben we besloten om met widgets te werken, de app in dark mode te ontwikkelen, een prominente feature op de startpagina te plaatsen, en vooral afstand te houden van de 'zielloze' uitstraling van typische zakelijke apps.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b>Learning outcome 1: User interaction (analysis & advice)</b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br><br>
          • <b>Learning outcome 5: Investigative problem solving</b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices.  <br><br>
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
