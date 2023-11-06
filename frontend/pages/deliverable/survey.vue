<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Survey"
          title="Inleiding"
          lo1
          lo5
          lo7
        >
          Voor ons project, Grip op Geluid, staat het centraal om bewustzijn te genereren omtrent gehoorschade tijdens gymlessen en docenten te ondersteunen bij het vinden van een geschikte oplossing in de vorm van een app. Met als doel inzicht te verkrijgen in de ervaringen van gymdocenten met dit probleem en welke oplossingen zij als passend beschouwen, heb ik een enquête afgenomen onder een selecte groep gymdocenten.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          Ik heb de enquête gemaakt in Google Forms, en onder andere verspreid door middel van Whatsapp groepen en Reddit. Dennis (onze stakeholder) vertelde dat ik deze enquête op internationale schaal mocht afnemen, omdat dit een wereldwijd probleem is. Daarom is de enquête ook in het Engels. Mocht het in de toekomst nodig zijn om de antwoorden te scheiden op basis van nationaliteit, dan kan dit, doordat ik deze vraag geïmplementeerd heb. Het is dus ook mogelijk om alleen de antwoorden van Nederlandse gymdocenten te bekijken. Dit zijn er in totaal 10. De enquête is 24 keer ingevuld. <br><br> Mocht je geinteresseerd zijn om elke vraag en bijbehorende antwoorden door te lezen, dan kun je hieronder de uitgebreide documentatie bekijken van deze deliverable.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk uitgebreide documentatie"
                primary
                regular
                arrow
                to="/documents/survey.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>

        <UiTextbox title="Conclusie">
          Belangrijke punten die naar voren komen: <br><br>
          <b>Demografische Inzichten:</b> <br>
          •	De meerderheid van de respondenten is mannelijk, tussen de 25 en 34 jaar oud, en heeft 1-5 jaar ervaring als gymdocent.<br>
          •	De enquête is internationaal uitgezet, waarbij de meeste reacties afkomstig zijn uit Amerika, gevolgd door Nederland.<br><br>
          <b>Bewustzijn en Ervaring:</b> <br>
          •	Het merendeel van de gymdocenten is zich bewust van de risico's van gehoorschade, maar toch ervaart een aanzienlijk percentage gehoorproblemen.<br>
          •	Veel docenten nemen momenteel geen maatregelen om hun gehoor te beschermen, maar er is wel interesse in het beheren van geluidsexpositie.<br><br>
          <b>Geluidscondities en Overlast:</b> <br>
          •	De geluidscondities in de gymzalen worden als erg luid beoordeeld. Er is sprake van frequente geluidsoverlast, vooral bij competitieve en balgerelateerde activiteiten.<br>
          <br><b>Schoolbeleid en Maatregelen:</b> <br>
          •	Het merendeel van de scholen heeft geen beleid om geluidsoverlast te beperken.<br>
          •	Scholen die wel maatregelen hebben genomen, gebruiken op maat gemaakte oordoppen en akoestische panelen.<br><br>
          <b>Interesse in App-functionaliteiten:</b> <br>
          •	Gymdocenten tonen interesse in een app die hen helpt hun geluidsexpositie te beheren.<br>
          •	Gewenste functies zijn een dagelijkse geluidslimiet, een decibelmeter, tips om geluidsoverlast te verminderen, en periodieke gehoortests.<br>
          •	Meldingen bij langdurige blootstelling aan luide omgevingen, een logboek, statistieken over geluidsniveaus en bescherming door middel van specifieke oortjes worden als waardevol beschouwd.<br><br>
          <br>Concluderend is er een duidelijke behoefte aan bewustwording, preventie en beheer van gehoorschade onder gymdocenten. Een app met de genoemde functionaliteiten kan een effectieve oplossing bieden door docenten te ondersteunen bij het verminderen van geluidsoverlast en het beschermen van hun gehoor tijdens gymlessen.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b>Learning outcome 1: User interaction (analysis & advice)</b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br><br>
          • <b>Learning outcome 5: Investigative problem solving</b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices.  <br><br>
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
