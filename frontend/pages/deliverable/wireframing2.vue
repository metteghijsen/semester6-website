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
          Nadat Luc en ik de brandguide hadden opgesteld, en ik de componenten had samengesteld, werd het tijd om één groot design te maken om alle ideeën te combineren.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
          add-image
          image-name="oortjesdesigns"
        >
          Ik ben begonnen met de Daily Dose-pagina. De daily dose is je maximale dagelijkse geluidsinname, en wordt gepresenteerd naar de gebruiker in de vorm van een grafiek en een bijbehorend percentage. Daan en Julien hebben een test gedaan met gebruikers om te bepalen hoe we de informatie het beste konden presenteren. Ze vroegen gebruikers welke weergave ze het meest overzichtelijk, duidelijk en opvallend vonden. Ook wilden ze weten welke manier van weergave gebruikers het snelst zou aanzetten tot verandering. Hoewel we als groep enthousiast waren over het gebruik van de smiley, bleek uit de gebruikerstests dat het oortje het beste werd ontvangen. Hoewel ik het jammer vond, vond ik het belangrijk om naar de gebruikers te luisteren. Ik ben dus begonnen met het implementeren van het oortje.
          <br><br>
          Het was lastig om dit visueel aantrekkelijk te maken. In eerste instantie hebben Luc en ik hiermee geworsteld. We wilden eerst ons oorvormige logo gebruiken voor de grafiek. Uiteindelijk vond ik in de Google Icons Library een ooricoon dat veel beter werkte voor mijn doel. Ik heb wat aangepaste lijnen getekend met de pen tool, wat resulteerde in een grafiek waar ik erg tevreden over ben. Ik heb wat inspiratie opgedaan uit de stappen, activiteiten en calorieënschermen van de Samsung Galaxy Watch en heb een aantal ontwerpen kunnen maken waar ik blij mee ben.
          <br><br>
          Deze ontwerpen heb ik getest in een A/B/C test, om te kijken welke het effectiefst waren bij de gebruiker. Nadat ik de resultaten van de test had verwerkt, kwam hier met de projectgroep wat discussie over. Ze waren het niet eens met de resultaten van de gebruikerstest. Om deze reden heb ik wat extra iteraties gemaakt. Deze moeten nog getest worden. Daarnaast heerste ook al een tijdje de discussie of we het percentage oplopend of aflopend zouden representeren. Na een A/B test die redelijk 50/50 uitviel, hebben we zelf de beslissing gemaakt om de daily dose te representeren als oplopend percentage. De uiteindelijke designs zijn hieronder te zien.

          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk figma bestand"
                primary
                regular
                arrow
                to="https://www.figma.com/file/oIqNVG2cKIFS9ToZsToQVz/Team-Snorkelkat-Design-File?type=design&node-id=468%3A2219&mode=design&t=okMXV8tSwD8xRfTj-1"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Figma iFrame">
          <iframe
            title="figma-ontwerp"
            style="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="1280"
            height="720"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoIqNVG2cKIFS9ToZsToQVz%2FTeam-Snorkelkat-Design-File%3Ftype%3Ddesign%26node-id%3D468%253A2219%26mode%3Ddesign%26t%3DokMXV8tSwD8xRfTj-1"
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
