<template>
  <div>
    <UiContainer>
      <div class="h-full overflow-x-hidden">
        <LayoutTaskbar />
        <!-- <div>
          <UiProject
            reverse
            image-name="personalproject"
            project-name="Individueel Project"
            project-description="
          Dit document dient als een uitgebreid verslag van de verschillende stadia die ik heb doorlopen bij het samenstellen van mijn portfolio. Hierin wordt dieper ingegaan op de specifieke stappen en overwegingen die een rol speelden tijdens het onderzoeks-, ontwerp- en realisatieproces van mijn portfolio."
          />
        </div> -->
        <!-- <div>
          <UiProject
            image-name="personalproject"
            project-name="Grip on Sound"
            project-description="
          Dit document dient als een uitgebreid verslag van de verschillende stadia die ik heb doorlopen bij het samenstellen van mijn portfolio. Hierin wordt dieper ingegaan op de specifieke stappen en overwegingen die een rol speelden tijdens het onderzoeks-, ontwerp- en realisatieproces van mijn portfolio."
          />
        </div> -->
        <div>
          <UiProject
            to="deliverable/ddw"
            image-name="ddw"
            project-name="Dutch Design Week"
            project-description="
          Van 23 t/m 25 oktober ben ik samen met mijn projectgroep en een Canadese student naar de Dutch Design Week geweest. Daarna moesten we met de inspiratie die we op de DDW hadden opgedaan gebruiken om een product te ontwerpen. Dit mocht alles zijn. In dit document kun je daar meer over lezen."
          />
        </div>

        <div>
          <UiProject
            reverse
            to="deliverable/weyweyweb"
            image-name="weyweyweb"
            project-name="Wey Wey Web"
            project-description="
          Van 22 t/m 25 november ben ik samen met Fontys naar Malaga geweest, om daar deel te nemen aan de Wey Wey Web conference. Dit is een conferentie gericht op iedereen die UI/UX, ontwerp en development interessant vindt. Hier leg ik uit hoe ik deze trip heb ervaren."
          />
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
