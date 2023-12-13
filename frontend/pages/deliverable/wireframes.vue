<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Wireframing"
          title="Inleiding"
          personal
          lo1
          lo2
          workshop
        >
          Dit document biedt inzicht in het proces dat ik heb doorlopen bij het ontwerpen van mijn portfolio-website. Het hoofddoel van dit verslag is om mijn vroege prototyping en ideeënverkenning te presenteren. Hierbij zal ik verschillende ideeën en wireframes bespreken die ik heb ontwikkeld.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          Ik heb mijn site ontworpen met behulp van Figma, met mijn onderzoek in mijn achterhoofd.
          Dankzij het interview met Jordi, het onderzoek naar trends en mijn diepe duik in de immersion onderzoeksmethode, heb ik nu een beter idee van wat ik in mijn website wil opnemen en waarom.
          Het interview heeft me geholpen begrijpen waar docenten op letten. Hierdoor weet ik nu hoe ik mijn projectpagina's het beste kan structureren. Docenten vinden het handig om studenten te beoordelen op basis van leeruitkomsten. Daarom heb ik geprobeerd om mijn website zo te maken dat dit mogelijk is, met een content-filter voor de inhoud. Ook heb ik het advies van Jordi opgevolgd door een "samenvatting" toe te voegen aan elke deliverable, met een inleiding, een samenvatting van mijn inzichten & bevindingen, en een conclusie. Voor meer details kunnen docenten de bijbehorende pdf bekijken.
          <br><br>
          Door mijn trendanalyse heb ik besloten om pastelkleuren, subtiele animaties, ronde vormen en mooie afbeeldingen te gebruiken. Ik wil een eenvoudige website maken, met in gedachten "less is more". Hoewel het belangrijk is dat mijn site er goed uitziet op mobiele apparaten, heb ik ervoor gekozen om geen speciaal mobiel ontwerp te maken, omdat docenten waarschijnlijk vooral hun laptops zullen gebruiken.
          <br><br>
          Het immersion-onderzoek heeft me geleid naar het overnemen van de stijl van Jordi's website, omdat ik die erg mooi vond. Maar ik heb ook gemerkt dat de website van Jordi niet zo gebruiksvriendelijk was. Daarom heb ik besloten om mijn website meer te laten lijken op die van Merlijn, door onder andere het contentfilter over te nemen en de manier waarop hij zijn werk presenteert. Merlijn heeft me ook geïnspireerd om afbeeldingen te genereren met behulp van AI. Om deze reden heb ik dan ook een Midjourney abonnement aangeschaft.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/wireframes.pdf"
                target="_blank"
              />
            </div>
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk figma bestand"
                primary
                regular
                arrow
                to="https://www.figma.com/file/r96scqhURaZI3UIRQgePqu/Portfolio-S6?type=design&node-id=0%3A1&mode=design&t=mg7HjvIySLlqLBl8-1"
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
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fr96scqhURaZI3UIRQgePqu%2FPortfolio-S6%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DTvSRFXcHF67rghAb-1"
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
