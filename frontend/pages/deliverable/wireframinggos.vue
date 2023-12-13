<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Wireframing"
          title="Inleiding"
          griponsound
          lo1
          lo2
          workshop
        >
          Om ons concept te visualiseren en een idee te krijgen van hoe elk groepslid de app visueel zou willen presenteren, besloten we allemaal om apart wireframes te gaan maken die we later zouden combineren tot een definitieve versie om te gaan testen. In deze stage van het project hadden we al requirements, maar nog geen brandguide o.i.d. Om deze reden wijken de individuele ontwerpen van iedereen erg af.
        </UiTextbox>
        <UiTextbox
          title="Daily Dose"
        >
          Ik ben begonnen met werken op basis van de paper prototypes die ik eerder had gemaakt. Aangezien ik het lastig vind om met low fidelity te beginnen en altijd een helder beeld heb van hoe ik wil dat iets eruitziet, koos ik ervoor om direct redelijk high-fidelity te ontwerpen. Het idee om een smiley te gebruiken voor de daily dose pagina kwam voort uit het moodboard dat Sef en ik hadden gemaakt. We hebben dit concept voorgelegd aan de stakeholder, die enthousiast was over het idee. Nadat ik een schets had gemaakt van het paper prototype en we als groep een algemeen idee hadden van alle elementen die we in dit ontwerp moesten opnemen, ben ik aan de slag gegaan. Het eindresultaat van mijn individuele ontwerpsessie voor de daily dose pagina is hier te zien.
          <div class="flex flex-col">
            <img src="/img/documentation/dailydose.png" alt="dailydose" class="w-full rounded-3xl mt-4">
          </div>
        </UiTextbox>
        <UiTextbox
          title="Calendar"
        >
          <div class="flex flex-col">
            <div>
              Ook voor de agenda had ik al een duidelijk beeld. Ik had iets kleurrijks in gedachten, en het leek me leuk om voor elke sport een illustratie toe te voegen. Voor dit ontwerp heb ik wel gebruik gemaakt van een datumslider die ik in het ontwerp van Tijn gezien had. Ik heb deze wel aangepast naar de styling van mijn prototype. Het eindresultaat van mijn individuele ontwerpsessie voor de calendar pagina is hier te zien.
            </div>
            <img src="/img/documentation/calendar.png" alt="dailydose" class="w-full rounded-3xl mt-4">
          </div>
        </UiTextbox>
        <UiTextbox title="Figma iFrame">
          De ontwerpen die in dit stuk documentatie besproken worden, staan aan de linkerkant van het bord.
          <iframe
            title="figma-ontwerp"
            class="mt-4 rounded-3xl"
            style="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="1280"
            height="720"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoIqNVG2cKIFS9ToZsToQVz%2FTeam-Snorkelkat-Design-File%3Ftype%3Ddesign%26node-id%3D2%253A5%26mode%3Ddesign%26t%3DfY6RB5tFpwg4ahUH-1"
            allowfullscreen
          />
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          • <b> Learning outcome 2: User interaction (execution & validation) </b> <br>
          You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders.
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
