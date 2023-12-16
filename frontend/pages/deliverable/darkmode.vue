<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Darkmode implementatie"
          title="Inleiding"
          lo3
          lo5
          workshop
          library
        >
          Om mezelf uit te dagen, en me verder te verdiepen in de mogelijkheden van Tailwind en Nuxt, heb ik besloten een dark theme te implementeren in mijn website.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="darkmode"
        >
          In eerste instantie ontdekte ik dat mijn collega Luc dit al had toegepast op zijn portfolio website, zij het met Next in plaats van Nuxt. Ondanks dit verschil vroeg ik hem om advies. Luc legde uit dat hij kleuren had georganiseerd in variabelen, specifiek voor zowel het light- als dark theme. Aangezien mijn website al was opgezet zonder deze aanpak, zou het volgen van zijn methode betekenen dat ik mijn hele website op de schop moest nemen. Hoewel dit een elegante benadering zou zijn geweest, wilde ik risico's vermijden en zocht ik naar een praktischer alternatief. <br><br>

          Mijn keuze viel uiteindelijk op Tailwind dark mode, waarbij het toevoegen van 'dark:' voor een class deze enkel activeert tijdens dark mode. Hoewel ik dit als ietwat slordig ervaarde, bood het een snelle en gemakkelijke implementatie, gezien mijn al bestaande gebruik van Tailwind. Ik heb een darkmode switch component ontwikkeld, waarmee gebruikers op elk gewenst moment van thema kunnen wisselen. Het aanpassen van de scrollbar voor dark mode bleek uitdagend, maar na grondig onderzoek vond ik uiteindelijk een oplossing, wat resulteerde in een correct werkende implementatie.
        </UiTextbox>
        <UiTextbox
          title="Conclusie"
        >
          Hoewel mijn oorspronkelijke streven was om de gestructureerde aanpak van Luc te volgen, bood de implementatie van Tailwind dark mode een pragmatische oplossing die naadloos aansloot bij mijn bestaande website. Het toevoegen van een dark mode switch component en het oplossen van uitdagingen met de scrollbar leidden tot een succesvolle implementatie van het dark theme, zonder het risico van verstoring van mijn bestaande site.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 3: Software design and realisation</b> <br>
          You create & design software with existing components or libraries using predetermined quality criteria and version control. <br><br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br>
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
