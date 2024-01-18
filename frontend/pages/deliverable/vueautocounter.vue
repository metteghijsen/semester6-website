<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Vue Autocounter"
          title="Inleiding"
          lo3
          lo5
          workshop
          library
        >
          Om mijn developmentvaardigheden te verbeteren, en mijn website meer eigen te maken, heb ik geprobeerd om een autocounter toe te voegen aan de homepagina van mijn portfolio website.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="vueautocounter"
        >
          Ik ben op zoek gegaan naar een library die me hierbij kon helpen. Zo kon ik meteen kennis opdoen omtrent het implementeren van externe libraries in mijn Vue/Nuxt project. Uiteindelijk stuitte ik op de <a target="_blank" href=" https://github.com/ps-cristopher/vue3-autocounter" class="text-darkblue100 italic"> Vue3Autocounter </a> library.
          <br><br>
          Na het lezen van de <a target="_blank" href="https://vue3autocounter.cristopherps.dev/docs" class="text-darkblue100 italic"> bijbehorende documentatie </a> en het runnen van een npm install, werkte het bijna correct. De counter begint automatisch te tellen wanneer de pagina geladen wordt. Dit wilde ik niet. Aangezien er eerst naar de counter toegescrolled moest worden door de gebruiker. Ik heb de documentatie verder doorgespit. Er stond van alles in over properties en events die je kon gebruiken om de counter precies zo in te stellen als je wilt. Uiteindelijk kwam ik ook methods tegen, waaronder de start() method. Met deze methode heb ik een script geschreven die ervoor zorgt dat de counter pas begint te tellen wanneer de gebruiker naar een specifiek coordinaat gescrolled heeft. Dit was erg interessant en leerzaam om te doen, en zeker iets wat ik in meer sites ga implementeren.
          <div class="w-max my-2 mr-4">
            <UiButton
              label="GitHub Repository"
              primary
              regular
              arrow
              to="https://github.com/metteghijsen/semester6-website"
              target="_blank"
            />
          </div>
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
