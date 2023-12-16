<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Lucide icons"
          title="Inleiding"
          lo3
          lo5
          workshop
          library
        >
          Om mijn workflow te verbeteren, en mijn site er beter uit te laten zien, heb ik besloten om Lucide Icons te integreren. Dit is een veelzijdige icoonbibliotheek die tijdens een gesprek met Luc ter sprake kwam.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="lucide"
        >
          Toen Luc en ik onze portfolio website bespraken, introduceerde hij me aan een icon library genaamd Lucide Icons. Deze bibliotheek integreert naadloos met front-end frameworks, zoals in het geval van Luc met React/Next. Toen ik ontdekte dat het ook compatible was met Vue/Nuxt, en hoe eenvoudig het was om het te implementeren, aarzelde ik geen moment en ging meteen aan de slag. Eerder maakte ik gebruik van Google Icons, wat resulteerde in een overvloed aan SVG's in de map van mijn website. Het was een chaotische situatie, en uiteindelijk ben ik zelfs overgestapt op PNG's omdat SVG's niet goed wilden samenwerken. Het leidde tot een rommelige situatie waarin alles wazig en slordig oogde.
          <br><br>
          Het implementeren van Lucide Icons was slechts een kwestie van het uitvoeren van een 'npm install', waarna ik meteen alle gewenste iconen kon invoegen door eenvoudigweg een regel code toe te voegen. Veel elementen zijn aanpasbaar, zoals de lijndikte en kleur, wat mijn website aanzienlijk heeft verbeterd. Dit is vooral merkbaar bij mijn dark theme-component, waar de zon nu soepel verandert in een maan en ook van kleur verschiet. In het verleden probeerde ik dit te bereiken met PNG's, maar dat verliep allesbehalve vlekkeloos.
          <br><br>
          Ik ben oprecht enthousiast over deze nieuwe kennisverrijking en ben dankbaar dat ik dit in mijn website heb geïmplementeerd. Het heeft niet alleen de esthetiek van mijn site verbeterd, maar ook mijn workflow vereenvoudigd en de mogelijkheden aanzienlijk vergroot.
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
