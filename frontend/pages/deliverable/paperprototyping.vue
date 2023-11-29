<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          workshop
          add-header
          header="Paper prototyping"
          title="Inleiding"
          griponsound
          lo1
          lo5
          lo7
        >
          Om de requirements op een toegankelijke manier te visualiseren, heb ik een paper prototype van de app gemaakt. Hierdoor heb ik snel en makkelijk kunnen verkennen hoe ik de UI voor me zie.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="paperprototype"
        >
          Ik heb verschillende schetsen gemaakt van de agenda-pagina en de daily-dose/home pagina. Op de agenda-pagina kan de gymdocent zien en plannen hoeveel geluid hij/zij per dag ervaart. Verschillende sportactiviteiten worden weergegeven, elk met het geschatte decibel niveau, waardoor de docent zijn blootstelling aan geluid kan reguleren. De daily-dose pagina toont via een smiley hoeveel hard geluid de docent die dag heeft ervaren. Een blije smiley geeft aan dat de docent goed bezig is en dat zijn/haar oren blij zijn. Een sippe smiley geeft aan dat er veel hard geluid is geweest en dat er mogelijk schade aan de oren is. Het decibelniveau wordt continu gemeten op de smartwatch en zodra de smartwatch verbinding maakt met de telefoon, wordt deze informatie bijgewerkt op de daily-dose pagina. Er zijn ook menu's met het hoogste decibelniveau dat die dag is gehoord en het gemiddelde decibelniveau. Het idee van smileys is ontstaan uit het moodboard dat Sef en ik hebben gemaakt.
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
