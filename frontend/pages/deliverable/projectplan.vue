<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Personal Project Plan"
          title="Inleiding"
          lo4
          lo5
          lo7
        >
          Dit semester moet ik een portfolio website maken om mijn werk in te presenteren. Docenten zullen deze website gebruiken om mij te beoordelen, dus is het belangrijk dat deze prettig en gebruiksvriendelijk is. In dit document beschrijf ik mijn persoonlijke projectplan, en beschrijf ik het proces dat ik heb doorlopen bij het samenstellen van dit plan.
        </UiTextbox>
        <UiTextbox
          add-image
          image-name="cmdmethods"
          title="Samenvatting"
        >
          Het belangrijkste doel van mijn persoonlijk projectplan is om mijn portfolio-websiteproject voor de komende drie weken te sturen en goed te plannen. Ondanks mijn natuurlijke neiging om direct aan het ontwerp te beginnen, realiseer ik me dat dit semester een onderzoekende aanpak vereist. Daarom heb ik onderzoeksvragen en -methoden zorgvuldig geformuleerd met behulp van het CMD Method Pack.
          <br><br>Tijdens het proces heb ik twee keer feedback gekregen van Constanze, wat mijn projectaanpak heeft versterkt. Ze benadrukte het belang van het demonstreren van de kwaliteit van mijn werk in de portfolio en moedigde diepgaander onderzoek aan. Ze suggereerde ook bibliografisch onderzoek als aanvullende methode. Daarnaast heeft ze waardevolle feedback gegeven over een grafiek die ik had gemaakt, waarin ik mijn projectstappen beschreef.
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Het opstellen van mijn Personal Project Plan was essentieel om de koers van mijn project te bepalen en een duidelijk plan te creëren voor de komende drie weken. Door de waardevolle feedback van Constanze kreeg ik een beter idee op welke elementen ik me het beste kon focussen, vooral met betrekking tot het aantonen van de kwaliteit van mijn werk in mijn portfolio. Kortom, mijn Personal Project Plan voelt als een professionele leidraad die mij helpt om een goed ontworpen en gebruiksvriendelijk portfolio samen te stellen.
          <div class="flex flex-row">
            <div class="w-[300px] my-2 mr-4">
              <UiButton
                label="bekijk PDF"
                primary
                regular
                arrow
                to="/documents/projectplandocumentatie.pdf"
                target="_blank"
              />
            </div>
            <div class="w-[370px] my-2">
              <UiButton
                label="bekijk projectplan"
                primary
                regular
                arrow
                to="/documents/personalprojectplan_v1_2_metteghijsen.pdf"
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
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
