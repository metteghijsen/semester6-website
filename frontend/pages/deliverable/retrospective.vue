<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Retrospective"
          title="Inleiding"
          griponsound
          lo7
          showroom
        >
          Om te reflecteren op ons groepswerk, hebben we na elke sprint een retrospective georganiseerd. In deze retrospectives gingen we als groep na wat ons gedurende een sprint wel of niet had geholpen, en hoe we dit opvolgende sprints konden verbeteren. Daarnaast boden de retrospectives de mogelijkheid om op een laagdrempelige manier te bespreken wat mensen dwarszat binnen de groep. Deze “checkups” vond ik zelf erg prettig.
        </UiTextbox>
        <UiTextbox
          title="Proces en Resultaten"
        >
          <div class="flex flex-col">
            <div>
              Dankzij de opzet van zes sprints, waarbij we bij elke sprint van scrummaster wisselden, kreeg iedereen in de groep de kans om minstens één keer als scrummaster op te treden. Hierdoor kon elk van ons leiderschap uitproberen binnen het scrumframework. Ook mocht elk teamlid aan het einde van elke sprint de retrospective organiseren. Zo heeft elk teamlid ervaring opgedaan met het begeleiden van evaluatiemomenten.
              <br><br>
              Dit systeem hielp niet alleen om de taken eerlijk te verdelen, maar zorgde er ook voor dat we allemaal wat meer leerden over leiderschap en samenwerken. Doordat iedereen betrokken was bij het organiseren van de retrospectives, werden we ook beter in het samen steeds beter maken van onze samenwerking.
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
