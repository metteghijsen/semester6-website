<template>
  <div>
    <UiContainer>
      <div class="h-full ">
        <LayoutTaskbar />
        <div v-motion-slide-left>
          <UiProject
            to="/deliverable/ddw"
            image-name="ddw"
            project-name="Dutch Design Week"
            project-description="
            Van 23 t/m 25 oktober ben ik samen met mijn projectgroep en een Canadese student naar de Dutch Design Week geweest. Daarna moesten we met de inspiratie die we op de DDW hadden opgedaan gebruiken om een product te ontwerpen. Dit mocht alles zijn. In dit document kun je daar meer over lezen."
          />
        </div>
        <div v-motion-slide-right>
          <UiProject
            reverse
            to="/project/griponsound"
            image-name="griponsound"
            project-name="Grip on Sound"
            project-description="Het geluidsniveau in gymzalen is vaak hoger dan 90 dB(A) tijdens een achturige werkdag, en daardoor lopen gymdocenten veel hoorschade op. Het is onze taak om een app te ontwikkelen die het bewustzijn vergroot en gymdocenten ondersteunt bij het reguleren van hun blootstelling aan geluid. "
          />
        </div>
        <div v-motion-slide-visible-left>
          <UiProject
            to="/project/personalproject"
            image-name="personalproject"
            project-name="Personal project"
            project-description="
            Dit document dient als een uitgebreid verslag van de verschillende stadia die ik heb doorlopen bij het samenstellen van mijn portfolio. Hierin wordt dieper ingegaan op de specifieke stappen en overwegingen die een rol speelden tijdens het onderzoeks-, ontwerp- en realisatieproces van mijn portfolio."
          />
        </div>
        <div v-motion-slide-visible-right>
          <UiProject
            reverse
            to="deliverable/weyweyweb"
            image-name="weyweyweb"
            project-name="Wey Wey Web"
            project-description="
            Van 22 t/m 25 november ben ik samen met Fontys naar Málaga geweest, om daar deel te nemen aan de Wey Wey Web conference. Dit is een conferentie gericht op iedereen die UI/UX, ontwerp en development interessant vindt. Hier leg ik uit hoe ik deze trip heb ervaren."
          />
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>
