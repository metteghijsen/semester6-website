<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="A/B/C testing"
          title="Inleiding"
          griponsound
          lo1
          lo2
          lo5
          lab
        >
          Ik heb enkele ontwerpen gemaakt voor de 'daily dose'-pagina. Op deze pagina wordt je maximale geluidsinname weergegeven aan de hand van een percentage en een grafiek. Het concept achter deze pagina is dat wanneer je deze bekijkt, je je gedrag aanpast en eerder geneigd bent om rustigere omgevingen op te zoeken. In Maze heb ik een test opgezet om te bepalen welk ontwerp het meest geschikt is om te implementeren.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="oortjes"
        >
          De Maze test is ingevuld door 26 mensen. Ik heb de afbeelding die hiernaast staat gebruikt voor de gebruikerstesten. <br><br>
          Mocht je de uitgebreide resultaten van de test willen doorlezen, dan kan dat in onderstaand document.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/abctesting.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>

        <UiTextbox title="Conclusie">
          Uit de Maze-test met 26 proefpersonen blijkt dat het tweede ontwerp voor de 'daily dose'-pagina de meest opvallende indruk maakte en als het meest stimulerend werd ervaren. De opvallende kleurvariatie en visuele complexiteit van dit ontwerp trokken de aandacht, waarbij het contrast tussen kleuren actie suggereerde. Diverse perspectieven kwamen naar voren, waarbij het tweede ontwerp als overtuigend werd gezien voor het communiceren van gevaarlijk terrein, terwijl het eerste ontwerp diepere betekenis aansprak. De kleurkeuze en de artistieke waarde van het oor in de ontwerpen twee en drie werden gewaardeerd met het oog op toekomstige verbeteringen. Samengevat bieden deze waardevolle inzichten input voor optimalisatie.
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
