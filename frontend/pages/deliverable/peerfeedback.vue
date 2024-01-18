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
          title="Sessie 1 (Sprint 3)"
        >
          <div class="flex flex-col">
            <div>
              Nadat ik een template had gemaakt voor de peerreview, is iedereen begonnen met schrijven. Nadat iedereen klaar was, hebben we alles nabesproken. Je kunt in de iFrames zien wat er gezegd is over iedereen en door wie, maar voor dit stuk documentatie gaan we vooral in op mijn werkhouding. <br><br> De groep vond vooral dat ik soms erg kritisch en negatief kan zijn, wat ook klopt. Dit is een probleem waar ik tegenaan loop omdat ik soms erg hoge standaarden kan zetten op mijn eigen werk, en deze standaarden stel ik dan ook voor andere mensen, waaronder mijn groepsgenoten. Om deze reden reageer ik vaak wat gepikeerder dan de rest wanneer iemand te laat is, of schiet ik sneller in de stress als we voor mijn gevoel achter lopen op de planning. Dit is iets waar ik al een hoop semesters tegenaan loop, en iets waar ik tot op de dag van vandaag nog steeds aan aan het werken ben. <br><br> Ik wil dit graag verbeteren, en ik probeer er de resterende projectperiode op te letten om zo de motivatie en de gezellige groepsdynamiek te behouden.
            </div>
            <iframe
              title="miro"
              class="w-full h-[600px] mt-4 rounded-3xl"
              width="768"
              height="432"
              src="https://miro.com/app/live-embed/uXjVNcKDVh8=/?moveToViewport=3474,3523,5665,3879&embedId=483631185720"
              frameborder="0"
              scrolling="no"
              allow="fullscreen; clipboard-read; clipboard-write"
              allowfullscreen
            />
          </div>
        </UiTextbox>
        <UiTextbox
          title="Sessie 2 (Sprint 6)"
        >
          <div class="flex flex-col">
            <div>
              Voor deze peerreview sessie hebben we dezelfde template gebruikt als bij de vorige sessie. We hebben gekeken of mensen verbeterd waren na de feedback van sprint 3. Hoewel ik zelf niet zeker wist of ik minder negatief was geworden of me minder snel zorgen maakte, leek het erop dat mijn groepsgenoten wel het idee hadden dat ik mezelf daarin had verbeterd. Ik heb mijn best gedaan om me tijdens de laatste sprints minder mee te laten slepen in angst of negatieve emoties. Mijn groepsgenoten gaven wel aan dat ik snel gestrest raak, iets wat ik zelf ook merk. Aan de andere kant vonden mijn groepsleden dat ik een goede scrummaster was. Ze waardeerden mijn initiatief en vonden dat ik een goede leidende rol vervulde, waarbij ik de orde wist te handhaven. Dit was prettig om te horen en zeker iets waar ik de komende semesters aan blijf werken.
            </div>
            <iframe
              title="miro"
              class="w-full h-[600px] mt-4 rounded-3xl"
              width="768"
              height="432"
              src="https://miro.com/app/live-embed/uXjVNcKDVh8=/?moveToViewport=11504,3505,5535,3965&embedId=346172360492"
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
