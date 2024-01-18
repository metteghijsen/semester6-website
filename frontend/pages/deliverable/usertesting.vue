<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Usertesting"
          title="Inleiding"
          griponsound
          lo1
          lo2
          lo5
          lab
        >
          Samen met Juliën heb ik een gebruikerstest opgezet in Maze om de UI van onze Noise Control app te optimaliseren. Tijdens deze test hebben we de eerste versie van onze UI getest met behulp van vragen en scenario’s.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          We kozen voor Maze vanwege de naadloze integratie met Figma, de tool die we gebruikten om het ontwerp van onze app te maken. Maze toont heatmaps van waar gebruikers het meest klikken, de tijd die ze besteden aan taken en stelt vragen die ze moeten beantwoorden. We deelden de tests met mensen binnen de doelgroep en voerden live tests uit met potentiële gebruikers.
          <br><br>
          Naast Maze vroegen we gebruikers ook om persoonlijk door de app te gaan, stelden we vragen en observeerden we hen voor extra inzichten die moeilijk meetbaar zijn met Maze.
          <img src="/img/documentation/maze.png" alt="maze" class="rounded-xl mt-4">
        </UiTextbox>
        <UiTextbox title="Resultaten">
          De usabilitytest omvatte 26 testers met diverse achtergronden, die verschillende aspecten van de app behandelden. Over het algemeen begrepen gebruikers snel hoe decibelwaarden en de inzichtenpagina werkten. Sommigen hadden moeite met de kalenderpagina, waarbij verbeteringen werden voorgesteld, zoals het toevoegen van een directe link naar de huidige activiteit en het mogelijk maken van navigatie tussen pagina's.
          <br><br>
          Open feedback was overwegend positief, met enkele gebruikers die problemen benoemden met duidelijkheid over percentages, decibelniveaus en het onderscheid tussen categorieën en artikelen op de inhoudspagina.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="Gezamelijk onderzoeksdocument"
                primary
                regular
                arrow
                to="/documents/app-usability-testing.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Iteraties">
          Na het verwerken van de feedback met Juliën en Tijn, hebben we een tweede versie van het ontwerp gemaakt. Door pagina's te combineren, knoppen te verplaatsen en tekst- en icon wijzigingen aan te brengen, is de tweede versie prettiger en gestroomlijnder. In-person usertesting voor deze versie leverde positieve resultaten op, maar sommige problemen bleven bestaan, zoals de overload aan informatie in de app, die door veel gebruikers als overweldigend werd ervaren.
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Over het algemeen werd het ontwerp goed ontvangen met voornamelijk positieve feedback. Enkele ontwerpfouten kunnen worden verbeterd, vooral op het gebied van navigatie.
          <br><br>
          We merkten op dat sommige vragen niet correct waren gesteld, wat resulteerde in vertekende resultaten voor sommige taken. Ondanks deze invloed op de analyse keken we naar heatmaps en andere gegevens om de mate van vertekening te beoordelen.
          <br><br>
          Open feedback benadrukte overwegend een positieve gebruikerservaring, met specifieke suggesties voor verbetering, zoals het toevoegen van een directe knop voor de huidige activiteit op de homepage en het verbeteren van paginanavigatie. Ondanks kleine problemen vond de meerderheid het ontwerp duidelijk en gebruiksvriendelijk. Deze inzichten zullen waardevol zijn bij het verfijnen van de interface en het aanpakken van specifieke gebruikerszorgen.
          <br><br>
          We losten de meeste ontwerpfouten op bij de laatste gebruikerstestronde. Het enige belangrijke punt dat nog niet is opgelost, betreft het bepalen welke gegevens relevant zijn voor elke gebruiker en het onderzoeken van manieren om ervoor te zorgen dat de gebruiker niet wordt overspoeld met informatie, waarvoor meer onderzoek nodig is, zoals het maken van een prioriteitenlijst van te tonen gegevens. <br> Deze tips hebben we meegenomen in ons <a target="_blank" href="https://metteghijsen.nl/deliverable/adviesrapport" class="text-darkblue100 italic">adviesrapport</a>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br><br>
          • <b> Learning outcome 2: User interaction (execution & validation) </b>
          You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders. <br><br>
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
