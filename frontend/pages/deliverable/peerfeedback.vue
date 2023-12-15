<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Peerfeedback"
          title="Inleiding"
          griponsound
          lo7
          showroom
        >
          Om te reflecteren op mijn eigen werkhouding en om te kijken of we als projectgroep onze houding kunnen verbeteren, heb ik een peer review sessie georganiseerd. Deze heeft plaatsgevonden op school, en hebben we gedocumenteerd in Miro.
        </UiTextbox>
        <UiTextbox
          title="Proces en Resultaten"
        >
          <div class="flex flex-col">
            <div>
              Nadat ik een template had gemaakt voor de peerreview, is iedereen begonnen met schrijven. Nadat iedereen klaar was, hebben we alles nabesproken. Je kunt hieronder zien wat er gezegd is over iedereen en door wie, maar voor dit stuk documentatie gaan we vooral in op mijn werkhouding. <br><br> De groep vond vooral dat ik soms erg kritisch en negatief kan zijn, wat ook klopt. Dit is een probleem waar ik tegenaan loop omdat ik soms erg hoge standaarden kan zetten op mijn eigen werk, en deze standaarden stel ik dan ook voor andere mensen, waaronder mijn groepsgenoten. Om deze reden reageer ik vaak wat gepikeerder dan de rest wanneer iemand te laat is, of schiet ik sneller in de stress als we voor mijn gevoel achter lopen op de planning. Dit is iets waar ik al een hoop semesters tegenaan loop, en iets waar ik tot op de dag van vandaag nog steeds aan aan het werken ben. <br><br> Ik wil dit graag verbeteren, en ik probeer er de resterende projectperiode op te letten om zo de motivatie en de gezellige groepsdynamiek te behouden.
            </div>
            <iframe
              title="miro"
              class="w-full h-[600px] mt-4 rounded-3xl"
              width="768"
              height="432"
              src="https://miro.com/app/live-embed/uXjVNcKDVh8=/?moveToViewport=7174,3578,6168,4560&embedId=594885623361"
              frameborder="0"
              scrolling="no"
              allow="fullscreen; clipboard-read; clipboard-write"
              allowfullscreen
            />
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 6: Personal leadership </b> <br>
          You methodically reflect on your professional identity and personal development.
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
