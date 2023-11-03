<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Requirements"
          title="Inleiding"
          lo1
          lo5
          lo7
        >
          Om de gewenste functies in de app te bepalen, hebben we in samenwerking met Dennis (onze stakeholder) een lijst met requirements opgesteld.
        </UiTextbox>
        <UiTextbox
          title="Proces"
          add-image
          image-name="requirements"
        >
          Deze brainstormsessie vond plaats aan onze groepstafel bij het whiteboard op TQ, een plek waar Dennis regelmatig te vinden is. Munira, een medestudent in haar vijfde semester media die haar stage bij Grip op Geluid loopt en een vergelijkbare opdracht heeft als de onze, heeft ook meegekeken toen we deze lijst opstelden. Aangezien Munira al veel onderzoek heeft gedaan, was het essentieel dat onze requirements in lijn waren met die van haar. We wilden nauw met haar samenwerken om dubbel werk te voorkomen. De lijst met requirements hebben we samengesteld op basis van ons vooraf uitgevoerde onderzoek, waaronder het interview met de gehoorspecialist, het moodboard, het gesprek met een gymdocent, en de enquête. De resultaten van deze onderzoeken waren interessant en nuttig bij het nemen van beslissingen. Dennis bood ook input bij het opstellen van de lijst. Met zijn team van hoorspecialisten en geluidsdeskundigen bij Sorama heeft al veel onderzoek plaatsgevonden, en deze inzichten namen we mee in onze lijst met requirements.
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Samen met Dennis en Munira hebben we een lijst met requirements voor onze app opgesteld. Hierin zitten belangrijke dingen zoals een geluidheatmap, lessen plannen op basis van geluid, weekoverzichten, en dagelijkse geluidsupdates. We willen gebruikers ook waarschuwen bij langdurig harde geluiden en bij goed weer (zodat er eventueel gymlessen buiten georganiseerd kunnen worden). De app moet lekker gebruiksvriendelijk zijn, met een speelse interface, dark mode, een duidelijke homepage, begrijpelijke taal, en een handig dashboard. Hij moet werken op Android, specifiek op de Google Pixel, en samenwerken met de Samsung Galaxy Watch inclusief de microfoon. En voor een persoonlijke touch kan je een account aanmaken, inloggen en uitloggen, zodat je data veilig blijft, en je deze niet kwijtraakt wanneer je de app deïnstalleert.
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
