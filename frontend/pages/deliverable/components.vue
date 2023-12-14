<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Components"
          title="Inleiding"
          griponsound
          lo1
          lo2
          workshop
        >
          Om ervoor te zorgen dat de designs van de hele projectgroep ongeveer dezelfde stijl aanhouden, heb ik een aantal componenten opgesteld die de hele groep kan gebruiken in hun design. Deze componenten heb ik opgesteld naar aanleiding van de brandguide die Luc en ik hebben samengesteld.
        </UiTextbox>
        <UiTextbox
          title="Samenvatting"
          add-image
          image-name="components"
        >
          Op basis van de brandguide heb ik een button-component, een tekstcomponent en een navigatiebalk (navbar) ontworpen. Ik heb bij het maken van deze componenten zoveel mogelijk rekening gehouden met de Material UI styling, en ondertussen toch onze eigen stijl proberen te behouden.
          <div class="flex flex-row">
            <div class="w-max my-2 mr-4">
              <UiButton
                label="bekijk figma bestand"
                primary
                regular
                arrow
                to="https://www.figma.com/file/oIqNVG2cKIFS9ToZsToQVz/Team-Snorkelkat-Design-File?type=design&node-id=1063%3A2049&mode=design&t=BI4HqyDqZDpGvc66-1"
                target="_blank"
              />
            </div>
          </div>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          • <b> Learning outcome 1: User interaction (analysis & advice) </b> <br>
          You analyse the user, the interaction, and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design. <br>
          • <b> Learning outcome 2: User interaction (execution & validation) </b> <br>
          You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders.
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
