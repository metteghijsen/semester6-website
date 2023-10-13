<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <UiTextbox
          add-header
          header="Pipeline"
          title="Inleiding"
          lo3
          lo5
        >
          Als ik projecten wilde uploaden naar mijn website, deed ik dit door mijn website te builden, en deze bestanden met behulp van FileZilla in een FTP server te slepen. Dit proces was niet alleen tijdrovend, maar ook vatbaar voor fouten. Het selecteren van bestanden was handmatig, wat gemakkelijk leidde tot het kiezen van de verkeerde map. Bovendien duurde het wachten op zowel het builden als het uploaden van mijn bestanden vaak meer dan 10 minuten. Omdat ik vond dat dit sneller en efficiënter zou moeten kunnen, heb ik besloten een deployment pipeline te implementeren.
        </UiTextbox>
        <UiTextbox
          title="Proces"
        >
          In mijn zoektocht naar een gestroomlijnde oplossing heb ik hulp gezocht bij een afgestudeerde software student. Hij wees me op de mogelijkheden van GitHub Actions, een geïntegreerde automatiserings- en CI/CD-tool binnen de GitHub-omgeving.
          Na onderzoek en overleg heb ik een YAML-bestand met de naam 'deploy.yml' aangemaakt in de map '.github/workflows' van mijn GitHub-repository. Dit bestand definieert de stappen die moeten worden uitgevoerd bij elke push naar de 'main'-branch van mijn repository.
        </UiTextbox>
        <UiTextbox
          add-image
          image-name="pipeline"
          title="Uitleg deploy.yml"
        >
          •	name: Geeft de naam van de GitHub Action workflow weer, in dit geval "DEPLOY METTEGHIJSEN." <br>
          •	on: Specificeert wanneer de workflow moet worden geactiveerd, hier wordt de pipeline geactiveerd bij elke push naar de 'main'-branch. <br>
          •	jobs: Definieert een enkele job met de naam 'web-deploy.' <br>
          •	runs-on: Specificeert het besturingssysteem waarop de job moet worden uitgevoerd, hier is het 'ubuntu-latest.' <br>
          •	steps: Bevat de afzonderlijke stappen die moeten worden uitgevoerd als onderdeel van de job. <br>
          •	actions/checkout: Haalt de broncode op in de GitHub-runneromgeving. <br>
          •	actions/setup-node: Stelt de Node.js-omgeving in voor het uitvoeren van de volgende stappen. <br>
          •	Installing project dependencies: Installeert de afhankelijkheden van het project in de './frontend'-map met het commando 'npm install.' <br>
          •	Building the project: Bouwt het project in de './frontend'-map met het commando 'npx nuxi generate -y.' <br>
          •	FTP the output: Deployt de gegenereerde bestanden naar de opgegeven FTP-server met behulp van de FTP-Deploy-Action. Het wachtwoord wordt beveiligd opgehaald uit GitHub Secrets. <br>
        </UiTextbox>
        <UiTextbox title="Conclusie">
          Met deze deployment pipeline automatiseer ik het proces van het bouwen van mijn frontend en het implementeren van de wijzigingen op de FTP-server. Dit optimaliseert de ontwikkelworkflow, vermindert menselijke fouten en versnelt de tijd tussen code schrijven en het zien van resultaten in een productieomgeving. Ik ben zeer tevreden met deze pipeline en ben van plan deze regelmatig te gebruiken gedurende dit semester. Bovendien heb ik nu een solide basis gelegd voor toekomstige projecten, waarbij ik op een efficiënte manier wijzigingen kan doorvoeren en mijn code naar productie kan brengen.
        </UiTextbox>
        <UiTextbox title="Leeruitkomsten">
          •	<b> Learning outcome 3: Software design and realisation</b> <br>
          You create & design software with existing components or libraries using predetermined quality criteria and version control. <br><br>
          •	<b> Learning outcome 5: Investigative problem solving </b> <br>
          You formulate sub-questions pertaining to the primary question and answer these using relevant research methods. You use the conclusions of the sub-questions to justify (design) choices. <br>
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
