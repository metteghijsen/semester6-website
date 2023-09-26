<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox add-header header="Literature Study / Trend Analysis" title="Inleiding" lo1 lo5>
          Dit document presenteert de resultaten van een literatuurstudie die ik heb uitgevoerd om een dieper inzicht te verkrijgen in de huidige designtrends die worden toegepast in portfolio's. Het hoofddoel van dit onderzoek was om inspiratie op te doen voor het ontwikkelen van mijn eigen portfolio. Als onderzoeker heb ik verschillende bronnen grondig bestudeerd en relevante inzichten en bevindingen verzameld.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
        >
          In mijn onderzoek naar webdesign trends ben ik gestuit op de website van <a target="_blank" href="https://teamnijhuis.com/nl/blog/webdesign-trends/" class="text-darkblue100 italic">Teamnijhuis</a>, waar een aantal trends werden beschreven die mijn aandacht trokken. Voorbeelden hiervan zijn schaalbare typografie, stijlvolle afbeeldingen & illustraties, en micro-animaties. Ik zou deze trends graag implementeren in mijn portfolio-website. Ik vind micro-animaties ook erg prettig omdat dit een site interactiever maakt. Ik wil ook graag een aangenaam lettertype en een minimalistische uitstraling gebruiken, met 'less is more' in gedachten.
          <br><br>
          Daarnaast heb ik inspiratie opgedaan bij <a target="_blank" href="https://blog.hubspot.com/marketing/web-design-trends-2017" class="text-darkblue100 italic">Hubspot</a>, waar 29 webdesign trends voor 2023 werden genoemd. Pastelkleuren en organische vormen spraken me aan, en ik plan ze te gebruiken voor een prettig, minimalistisch design. Hoewel responsiveness en mobile-friendliness belangrijk zijn, zal mijn MVP voorlopig niet responsive zijn, omdat docenten naar verwachting mijn site op hun laptops zullen bekijken.
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Dit onderzoek bood inzicht in hedendaagse designtrends voor portfolio's, met als doel inspiratie op te doen voor mijn eigen portfolio-website. Mijn centrale vraag richtte zich op het creëren van intuïtieve navigatie voor docenten, en het onderzoeken van richtlijnen voor een prettig portfolio.
          Belangrijke trends die naar voren kwamen, omvatten schaalbare typografie, stijlvolle afbeeldingen, en micro-animaties. Pastelkleuren en organische vormen werden ook genoemd.
          Deze trends kunnen bijdragen aan een aantrekkelijke en gebruiksvriendelijke portfolio-website. De keuze van welke trends te implementeren, moet echter worden afgestemd op de doelgroep van mijn website. Ongeacht de trends moet de website duidelijk en intuïtief zijn voor docenten.
          Ik plan mijn portfolio-website te ontwikkelen met aandacht voor deze trends en mijn specifieke doelen. Door deze designelementen te integreren, streef ik naar een effectieve online presentatie van mijn werk.

          <div class="flex flex-row">
            <div class="w-[300px] my-2 mr-4">
              <UiButton
                label="bekijk PDF"
                primary
                regular
                arrow
                to="/documents/literatuurstudie.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br><br>
        </UiTextbox>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
