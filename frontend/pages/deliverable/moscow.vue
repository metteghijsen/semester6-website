<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="MoSCoW"
          title="Inleiding"
          lo1
          lo5
          lo7
        >
          Om de meest geschikte requirements te identificeren, hebben we gebruikgemaakt van de MoSCoW-methode. MoSCoW staat voor Must have, Should have, Could have, en Won’t have. Deze methode stelt ons in staat om alle requirements in te delen in deze categorieën, waardoor we een helder beeld krijgen van de gewenste kenmerken voor ons Minimal Viable Product (MVP).
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          Ik heb de lijst met requirements in onze Miro omgeving gezet. Vervolgens heb ik de MoSCoW template van Miro geïmporteerd. Samen met de groep zijn we één voor één over elke requirement heen gegaan, en hebben we samen bepaald in welke categorie deze thuishoort. Bij deze beslissing hebben we het overleg wat we diezelfde middag met onze stakeholder hebben gehad, in ons achterhoofd gehouden. We wisten namelijk welke requirements voor Dennis (onze stakeholder) prioriteit hadden. Hieronder kun je ons Miro bord, met de MoSCoW methode bekijken. <iframe
            class="mt-4"
            title="miro"
            width="100%"
            height="732"
            src="https://miro.com/app/live-embed/uXjVNcKDVh8=/?moveToViewport=478,969,1259,1304&embedId=313761064366"
            frameborder="0"
            scrolling="no"
            allow="fullscreen; clipboard-read; clipboard-write"
            allowfullscreen
          />
        </UiTextbox>
        <UiTextbox title="Conclusie">
          De gebruiker streeft naar een Android-applicatie die vlekkeloos draait op de Google Pixel en geïntegreerd is met de Samsung Galaxy Watch, waarbij de app gebruikmaakt van de smartwatch-microfoon. Belangrijke functionaliteiten omvatten het plannen van lessen op basis van potentiële geluidsoverlast, dagelijkse geluidsupdates en waarschuwingen bij langdurige blootstelling aan harde geluiden. Daarnaast is er behoefte aan een overzichtelijke homepage met een centraal inzicht, heldere begrippen en een intuïtief dashboard.
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
