<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-auto">
        <LayoutTaskbar />

        <div class="flex flex-row">
          <div class="flex flex-col">
            <UiLearningOutcome lo-name-color="text-red100" lo-name="1. User Interaction (Analysis & Advice)" lo-description="You analyse the user, the user interaction and the user experience, also taking state of the art interactive technologies into account. You select a suitable design process to be able to advise on UX interventions based on a validated UX design." />
            <UiLearningOutcome lo-name-color="text-yellow100" lo-name="3. Software design and realisation" lo-description="You create & design software with existing components or libraries using predetermined quality criteria and version control." />
            <UiLearningOutcome lo-name-color="text-blue100" lo-name="5. Investigative problem solving" lo-description="You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices." />
          </div>

          <div class="flex flex-col">
            <UiLearningOutcome lo-name-color="text-orange100" lo-name="2. User Interaction (Execution & Validation)" lo-description="You execute and evaluate the user experience of an interactive product. You document the development process for the stakeholders." />
            <UiLearningOutcome lo-name-color="text-green100" lo-name="4. Future-oriented organisation" lo-description="You carry out a problem analysis and on that basis, you determine the definitive problem and elaborate on this in a project plan." />
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
