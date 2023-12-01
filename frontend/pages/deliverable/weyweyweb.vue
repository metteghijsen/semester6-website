<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Wey Wey Web Málaga"
          title="Inleiding"
          lo7
        >
          Van 22 tot 25 november nam ik deel aan de WeyWeyWeb conferentie in Málaga, waar ik vijf lezingen en één workshop bijwoonde. In de volgende sectie deel ik mijn bevindingen over de drie lezingen die ik als meest boeiend heb ervaren.
        </UiTextbox>
        <UiTextbox
          title="Chat GPT and AI for web developers"
          add-image
          image-name="gpt"
        >
          Eén van de presentaties behandelde het onderwerp Kunstmatige Intelligentie (AI) en de manier waarop teksten worden gegenereerd. De workshopleider introduceerde boeiende termen zoals hallucinaties en temperatuur. Tekstgeneratie is gebaseerd op statistieken, waarbij ChatGPT zinnen vormt op basis van het statistisch meest waarschijnlijke volgende woord. Het aanpassen van de temperatuurwaarde kan leiden tot creatievere antwoorden, maar een te hoge temperatuur kan leiden tot foutieve informatie, ook wel hallucinaties genoemd. Deze temperatuurwaarden kunnen worden ingesteld bij het gebruik van de API, wat relevant kan zijn voor verschillende toepassingen, zoals klantenservicebots (temperatuur 0 voor consistente antwoorden) en brainstormbots (temperatuur 2 voor creativiteit). De spreker benadrukte ook de mogelijkheid van het scrapen van website-inhoud na een update, maar merkte op dat informatie achter een klik, vanwege JavaScript, niet beschikbaar is.
        </UiTextbox>
        <UiTextbox
          title="UI Design of the future"
          add-image
          image-name="futureui"
        >
          Een andere lezing concentreerde zich op UI-design, specifiek "UI Design of the future". De spreker benadrukte het belang van experimenteren en gaf een historisch overzicht van UI-ontwerp, waarbij hij betoogde dat "flat design" populair is vanwege de goedkope en gemakkelijke programmeerbaarheid. Hij uitte frustratie over het gebrek aan experimentatie in moderne bedrijven. Hoewel de workshop informatief was over de geschiedenis van UI-design, was de spreker overwegend kritisch.
        </UiTextbox>
        <UiTextbox
          title="Intergrating 3D in web apps"
          add-image
          image-name="3d"
        >
          Een technischere presentatie behandelde de integratie van 3D in een webapp met behulp van REACT3 en Three.js, met specifieke aandacht voor React Three Fiber. De spreker gebruikte Blender voor 3D-modellen en besprak het debat over het gebruik van Eevee als rendering engine, ondanks het matige uiterlijk, vanwege de hoge vereisten van Cycles. Praktische tips werden gedeeld, zoals het instellen van roughness voor verschillende materialen en het belang van zorgvuldig objectselectie bij het exporteren naar GLTF-bestanden. Een interessante onthulling was een website waarmee je een GLTF-bestand kon uploaden en een React-bestand terugkreeg. De integratie van deze bestanden in React Three Fiber werd gedetailleerd besproken, inclusief het toevoegen van omgevingslicht en het gebruik van een <Stage>
            voor effectieve weergave. Voor interactieve weergave werd het toevoegen van <OrbitControls>
              aanbevolen.
            </orbitcontrols>
          </stage>
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 7: Goal-oriented interaction </b> <br>
          You communicate with different stakeholders and team members about the ICT assignment, taking into account an international context.
        </UiTextbox>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
