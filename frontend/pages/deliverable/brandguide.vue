<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Brandguide Noise Control"
          title="Inleiding"
          griponsound
          lo1
          lo5
          lo6
          lo7
          library
          workshop
        >
          Om al onze verschillende ontwerpen en ideeën samen te voegen, hebben Luc en ik gewerkt aan het opstellen van een brandguide. Dit mini-project nam ongeveer een week in beslag en omvatte zowel online samenwerking in Figma als ontmoetingen op school, waarbij we op elkaars schermen mee keken.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          Onze eerste taak was het bepalen van ons kleur- en lettertypegebruik. Samen bekeken Luc en ik verschillende veelgebruikte lettertypes, waaronder enkele persoonlijke favorieten. Bij het maken van deze keuzes hielden we altijd de waarden en doelgroep van onze app in gedachten. Aangezien onze doelgroep voornamelijk uit volwassenen bestaat en de app is gericht op het overbrengen van informatie, vermijdden we overdreven speelse lettertypes die als afleidend zouden kunnen worden ervaren. Uiteindelijk kozen we voor het lettertype "Inter". Luc deed ook onderzoek om te bepalen of we onze app in licht of donker thema zouden ontwerpen.
          <br><br>
          Terwijl Luc zich bezighield met het onderzoek naar de verschillende thema’s, heb ik me gericht op kleurgebruik en de betekenis van specifieke kleuren. Ons eindresultaat was een kleurenpalet bestaande uit blauw en oranje.
          <br><br>
          We hebben de brandguide gemaakt in Figma, en daarna geexporteerd als PDF. Hieronder staat ons Figma bestnad, en kun je meer zien over het proces.
          <br><br>
          <iframe
            title="brandguideproces"
            style="border: 1px solid rgba(0, 0, 0, 0.1);"
            width="1310"
            height="750"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoIqNVG2cKIFS9ToZsToQVz%2FTeam-Snorkelkat-Design-File%3Ftype%3Ddesign%26node-id%3D2%253A11%26mode%3Ddesign%26t%3DXxVSAnvkF5AOqk1f-1"
            allowfullscreen
          />
        </UiTextbox>
        <UiTextbox
          title="Resultaat"
        >
          <div class="flex flex-row">
            <div class="w-[740px]">
              Hieronder vind je alle versies van de brandguide die Luc en ik hebben ontwikkeld, waarbij de meest recente versie is ingebed. Mijn verantwoordelijkheden omvatten het opstellen van de inhoudsopgave, de algemene opmaak van het document, de verhalende pagina, de kleurenpagina, de pagina met lettertypes (waarbij Luc later aanpassingen heeft gemaakt), en de pagina met pictogrammen. Aan de andere kant heeft Luc zich gericht op de do's en don'ts, de logopagina en de pagina met kleurgradaties.
              <div class="flex flex-row">
                <div class="w-max my-2 mr-4">
                  <UiButton
                    label="bekijk brandguide versie 0"
                    primary
                    regular
                    arrow
                    to="/documents/NoiseControlBrandguideV0.pdf"
                    target="_blank"
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="w-max my-2 mr-4">
                  <UiButton
                    label="bekijk brandguide versie 1"
                    primary
                    regular
                    arrow
                    to="/documents/NoiseControlBrandguideV1.pdf"
                    target="_blank"
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="w-max my-2 mr-4">
                  <UiButton
                    label="bekijk brandguide versie 2"
                    primary
                    regular
                    arrow
                    to="/documents/NoiseControlBrandguideV2.pdf"
                    target="_blank"
                  />
                </div>
              </div>
              <div class="flex flex-row">
                <div class="w-max my-2 mr-4">
                  <UiButton
                    label="bekijk brandguide versie 3"
                    primary
                    regular
                    arrow
                    to="/documents/NoiseControlBrandguideV3.pdf"
                    target="_blank"
                  />
                </div>
              </div>
            </div>
            <iframe
              src="/documents/NoiseControlBrandguideV3.pdf"
              width="550px"
              height="700px"
              title="leeswijzer"
              class="rounded-3xl"
            />
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br>
          •	<b> Learning outcome 6: Personal leadership </b> <br>
          You methodically reflect on your professional identity and personal development.  <br>
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
