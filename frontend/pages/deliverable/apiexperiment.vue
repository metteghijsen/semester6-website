<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="API Experiment"
          title="Inleiding"
          lo3
          lo5
          workshop
          library
        >
          Om mijn kennis over Vue uit te breiden, heb ik besloten om te experimenteren met het gebruiken van API’s.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          Ik vond op GitHub een <a target="_blank" href="https://github.com/public-apis/public-apis" class="text-darkblue100 italic">lijst met beschikbare API's</a> en kwam de Dog API tegen. Het leek me interessant om een experiment te doen waarbij bij het klikken op een knop een willekeurige foto van een hond wordt getoond. Ik heb wat onderzoek gedaan naar het oproepen van een API en ontdekte dat ik het fetch() commando kon gebruiken. Daarna heb ik de documentatie op de website van de <a target="_blank" href="https://dog.ceo/dog-api/" class="text-darkblue100 italic">Dog API</a> bekeken om te begrijpen hoe ik de API kon oproepen. Nadat ik dit had gedaan, kon ik "random" toevoegen aan de URL om een willekeurige afbeelding op te halen. Ik weet dat de code nog geoptimaliseerd kan worden zodat de fetch slechts één keer hoeft te worden uitgevoerd, maar ik ben al blij dat het werkt zoals het is en vond het een leerzame ervaring. Hopelijk kan ik in de toekomst een cool Vue-project maken met een meer uitgebreide API, maar voor nu is dit een goede start.
          <div class="w-max my-2 mr-4">
            <UiButton
              label="GitHub Repository"
              primary
              regular
              arrow
              to="https://github.com/metteghijsen/apiexperiment"
              target="_blank"
            />
          </div>
          <div class="flex justify-center">
            <img src="/img/documentation/dogapi.gif" alt="dogapi" class="mt-4">
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
