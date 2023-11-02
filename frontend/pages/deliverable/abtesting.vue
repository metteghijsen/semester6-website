<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="A/B Testing"
          title="Inleiding"
          lo1
          lo2
          lo5
        >
          Ik vond zelf de manier waarop ik het type van mijn deliverable aangaf, enigszins onduidelijk. Om deze reden heb ik besloten om dit aan te passen. Om mijn nieuwe ontwerp te valideren, heb ik A/B testing uitgevoerd.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          Ik heb 10 mensen gevraagd welke manier ze prefereerde om aan te geven bij welk project een specifiek deliverable hoort. Acht van hen kozen voor de vernieuwde versie. Ze zeiden dat het duidelijker was omdat je in één oogopslag kon zien bij welk project een deliverable hoort. Je hoeft hier niet naar te zoeken. Ook vonden ze de vernieuwing beter passen bij de stijl van de rest van de website. Deze positieve reacties laten zien dat de verandering niet alleen handig was, maar ook zorgde voor een meer samenhangende look en feel van mijn portfolio.
          <NuxtImg src="img/documentation/beforeafter.png" class="w-[60%] mt-4 rounded-3xl" />
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Kortom, uit de A/B-test met 10 deelnemers blijkt dat de vernieuwde manier om het type van mijn werk aan te geven bij 8 mensen in de smaak viel. Ze vonden het duidelijker en beter passen bij de rest van de website. Deze positieve reacties laten zien dat de verandering een verbetering is, waardoor de website nu overzichtelijker en consistenter is.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br><br>
          • <b> Learning outcome 2: User interaction (execution & validation) </b>
          You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders. <br><br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br><br>
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
