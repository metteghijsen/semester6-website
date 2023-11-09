<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Group Project Plan"
          title="Inleiding"
          lo4
          lo5
          lo7
        >
          Vanaf begin 2023 vereist een nieuwe wet in Nederland dat basisschoolkinderen minstens twee uur per week lichamelijke opvoeding krijgen. Dit betekent dat leraren lichamelijke opvoeding meer tijd in gymzalen moeten doorbrengen. Het geluidsniveau in gymzalen is echter vaak hoger dan 90 dB(A) tijdens een achturige werkdag, en daardoor lopen gymdocenten veel hoorschade op. Het is onze taak om een app te ontwikkelen die het bewustzijn vergroot en gymdocenten ondersteunt bij het reguleren van hun blootstelling aan geluid.
        </UiTextbox>
        <UiTextbox
          title="Proces & Iteraties"
        >
          Van het projectplan heb ik een deel van hoofdstuk 1, heel hoofdstuk 2, en hoofdstuk 3.1 en 3.2 geschreven. <br><br>
          Versie 1.0
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk projectplan versie 1.0"
                primary
                regular
                arrow
                to="/documents/ProjectplanGroup2v1.pdf"
                target="_blank"
              />
            </div>
          </div>

          Versie 1.1
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk projectplan versie 1.1"
                primary
                regular
                arrow
                to="/documents/ProjectplanGroup2v1.1.pdf"
                target="_blank"
              />
            </div>
          </div>

          Versie 1.2
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk projectplan versie 1.2"
                primary
                regular
                arrow
                to="/documents/ProjectplanGroup2v1.2.pdf"
                target="_blank"
              />
            </div>
          </div>

          Versie 1.3
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk projectplan versie 1.3"
                primary
                regular
                arrow
                to="/documents/ProjectplanGroup2v1.3.pdf"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 4: Future-oriented organisation </b> <br>
          You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan. <br><br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br><br>
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
