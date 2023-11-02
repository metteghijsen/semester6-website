<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Development Website"
          title="Inleiding"
          lo2
          lo3
          lo6
        >
          Om mijn werk voor docenten gemakkelijk en interactief te presenteren, heb ik een prototype van mijn portfolio gemaakt in Nuxt. In dit verslag leg ik uit hoe ik te werk ben gegaan.
        </UiTextbox>
        <UiTextbox
          title="Setup"
        >
          Als eerste heb ik een <a target="_blank" href="https://github.com/metteghijsen/semester6-website" class="text-darkblue100 italic">GitHub-repository</a> aangemaakt en daar een Nuxt3-boilerplate aan toegevoegd. Deze boilerplate is een soort sjabloon die ik gebruik om mijn projecten op te zetten. Hierdoor blijft alles overzichtelijk en zijn mijn voorkeursinstellingen al klaar, inclusief de configuratie van Tailwind. Voordat ik begin met het ontwikkelen van de website, stel ik mijn eigen lettertypen en kleuren in. Dit doe ik in een 'playground', een webpagina waarop ik al mijn werk en componenten test.
          <br><br>
          Mijn eerste stap is het maken van een containercomponent, die zorgt voor de margins aan de zijkant van mijn webpagina en ervoor zorgt dat alle content gecentreerd staat. Daarna maak ik vaak een typografiecomponent waarin ik alle tekststijlen laad, zoals titels, subtitels en paragraphs. Door dit goed in te stellen, hoef ik niet telkens handmatig stijlen toe te voegen wanneer ik tekst gebruik.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk playground"
                primary
                regular
                arrow
                to="/playground/mette"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>

        <UiTextbox
          title="Development"
        >
          Als de basis klaar is, ga ik over naar het maken van de eigenlijke componenten, zoals buttons of tekstboxen. Ook werk ik aan complexere componenten waarin meerdere kleinere componenten voorkomen, zoals het 'Deliverable' of 'Project'-component. Bij het 'Deliverable'-component moesten ook properties worden meegegeven om aan te geven bij welke leeruitkomst een 'deliverable' hoort. Dit was erg interessant om in elkaar te zetten. <br><br>

          Nadat deze componenten klaar zijn, voeg ik alle pagina's samen. Omdat ik elk individueel component al heb gebouwd, kost het relatief weinig tijd om de frontend van elke pagina samen te stellen door simpelweg de componenten te combineren. Het samenstellen van de 'Deliverables'-pagina kostte wel iets meer tijd vanwege het implementeren van het content-filter. Uiteindelijk is dit me gelukt met behulp van 'v-if'-statements. Ik ben tevreden met het proces en ben gelukkig weinig obstakels tegengekomen bij het opzetten van de site. Iets waar ik op dit moment wel last van heb, is de wachttijd bij het online zetten van nieuwe projecten en het gedoe met Filezilla. Daarom plan ik een pipeline te ontwikkelen, zodat het uploaden van een project slechts een kwestie is van het pushen naar een bepaalde branch. Dit lijkt me handig en leerzaam om te doen.
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Met de kennis die ik tijdens mijn stage heb opgedaan, kan ik nu snel, overzichtelijk en prettig websites ontwikkelen. Ik ben trots op de portfolio-website die ik heb gemaakt en vind het een handige en overzichtelijke manier om mijn werk te presenteren. Wel kan het uploadproces nog versneld en verbeterd worden, daarom plan ik zelf een pipeline te bouwen. Ook zijn er componenten die ik achteraf efficiënter en netter had kunnen maken. Soms heb ik het gevoel dat mijn componenten wat rommelig zijn, iets waar ik in de toekomst op wil letten.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 2: User interaction (execution & validation) </b>
          You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders. <br><br>
          •	<b> Learning outcome 3: Software design and realisation</b> <br>
          You create & design software with existing components or libraries using predetermined quality criteria and version control. <br><br>
          •	<b> Learning outcome 6: Personal leadership </b> <br>
          You methodically reflect on your professional identity and personal development.
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
