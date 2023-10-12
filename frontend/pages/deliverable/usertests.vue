<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Usertests"
          title="Inleiding"
          lo1
          lo2
          lo5
        >
          Eerder heb ik in Figma wireframes gemaakt van mijn portfolio website. Deze heb ik interactief proberen te maken. Om mijn designkeuzes te valideren heb ik gebruikerstesten uitgevoerd op deze interactieve prototypes. In dit document neem ik je mee in de resultaten van deze gebruikerstest, en geef ik toelichting bij de beslissingen die ik heb gemaakt op basis van waardevolle feedback die ik heb ontvangen.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          Voordat ik begon met testen, was het belangrijk om de juiste methode uit te zoeken om de testen af te nemen. Ik had opgemerkt dat veel van mijn medestudenten gebruikmaakten van Maze. Hoewel ik in het verleden deze methode ook had toegepast, had ik persoonlijk ervaren dat het opzetten van tests met Maze, waarbij je gebruikers simpelweg links stuurt, niet altijd een volledig inzicht geeft in het proces dat de gebruikers doorlopen. Vaak zie je onvoltooide tests of rode balken, zonder dat je echt kunt begrijpen wat er in het hoofd van de gebruiker omgaat. Om deze reden heb ik ervoor gekozen om vijf specifieke scenario's te formuleren en actief naast de gebruikers te zitten terwijl zij de tests uitvoeren.
          <br><br>
          •	<b>Scenario 1:</b> Je wilt weten welke deliverables een student heeft per leeruitkomst.<br>
          •	<b>Scenario 2:</b> Je wilt weten wat de student voor hun persoonlijke project heeft gedaan.<br>
          •	<b>Scenario 3:</b> Je bent op zoek naar de leeswijzer. Waar kun je deze vinden?<br>
          •	<b>Scenario 4:</b> Je bent op zoek naar de definitie van de leeruitkomsten. Wat doe je?<br>
          •	<b>Scenario 5:</b> Je bent op zoek naar contactinformatie van de student. Waar kijk je?<br><br>

          Elke individuele usertest is te bekijken in het PDF document.

          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/usertests.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          De gebruikerstests hebben waardevolle inzichten opgeleverd voor de optimalisatie van mijn portfolio website. Over het algemeen werd de website positief beoordeeld op het gebied van esthetiek en gebruiksvriendelijkheid. De belangrijkste aanbevelingen zijn het toevoegen van de leeswijzer aan de navigatiebalk en het overwegen van optimalisaties om de grootte van de website te verminderen, zoals het verkleinen van elementen.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          • <b> Learning outcome 2: User interaction (execution & validation) </b>
          You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders. <br>
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
