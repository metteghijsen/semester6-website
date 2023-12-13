<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Color Research"
          title="Inleiding"
          griponsound
          lo1
          lo5
          library
        >
          Om erachter te komen welke kleuren we het beste kunnen gebruiken in onze app, heb ik een kleuronderzoek uitgevoerd.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
          add-image
          image-name="kleurwiel"
        >
          Ik heb een aantal artikelen gelezen over effectieve strategieën voor het kiezen van kleuren voor je applicatie. Het blijkt dat het selecteren van de juiste kleuren meer omvat dan persoonlijke voorkeur. Een belangrijk aspect is het begrijpen van kleurassociaties en de emotionele impact ervan. Het advies is ook om kleuren te kiezen die oveenkomen met de gewenste gebruikerservaring. Daarnaast is het belangrijk om rekening te houden met de culturele context en doelgroep van de app. Het bekijken van kleurgebruik bij concurrenten kan ook inzicht bieden. Het gebruik van basiskleuren en het streven naar consistentie en minimalisme worden aanbevolen voor een effectief en aantrekkelijk kleurenschema.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/kleuronderzoek2.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Op basis van dit onderzoek hebben we als groep gekozen om blauw en oranje te gebruiken in onze app. Het zij gerechtvaardigde kleuren voor een app die is ontworpen om de geluidsinname van gymdocenten te reguleren. Uit het kleuronderzoek blijkt dat blauw wordt geassocieerd met loyaliteit en vertrouwen, essentiële kenmerken voor een educatieve app. Bovendien is blauw wereldwijd de meest geliefde kleur, waardoor het een positieve impact heeft op de gebruikerservaring. Oranje, een creatieve en energieke kleur, voegt een dynamisch element toe dat past bij de jeugdige, avontuurlijke, actieve sfeer van gymactiviteiten. De keuze voor deze kleuren is gebaseerd op inzichten in emotie, cultuur en concurrentie, wat aansluit bij de doelgroep van gymdocenten.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
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
