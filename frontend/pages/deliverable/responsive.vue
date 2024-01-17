<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Responsive"
          title="Inleiding"
          lo3
          lo5
          workshop
          library
        >
          Omdat ik meer van de development leeruitkomst wilde laten zien, kreeg ik het advies van mijn semestercoach om mijn portfolio website responsive te maken. Met de kennis die ik tijdens mijn stage heb opgedaan, ben ik deze uitdaging aangegaan.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="tailwind"
        >
          Ik heb mijn portfolio website gestyled met Tailwind. Hier kan ik snel en makkelijk mee werken, en het voelt voor mij erg intuitief. Tijdens mijn stage heb ik geleerd om mijn elementen altijd mobile first te stylen. Alleen had ik bij het developen van mijn portfolio niet de intentie om deze responsive te maken, en had ik hier dus ook geen ontwerp voor.
          <br><br>
          Uiteindelijk heb ik met behulp van de breakpoint-prefixen van Tailwind mijn portfolio omgezet naar een mobile-first ontwerp. Hierdoor werkt mijn website nu goed op alle schermgroottes. Ik vond dit een leuke, leerzame uitdaging, en ik ben blij dat mijn website er nu een stuk professioneler uitziet.
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
