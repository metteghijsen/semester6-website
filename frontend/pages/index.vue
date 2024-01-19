<template>
  <div>
    <UiContainer>
      <div>
        <LayoutTaskbar />
        <div v-motion-slide-bottom class="grid md:grid-cols-2 md:gap-1 grid-cols-1 gap-0.5">
          <UiProject
            to="/groupproject"
            image-name="griponsound"
            project-name="Grip on Sound"
            project-description="Het geluidsniveau in gymzalen is vaak hoger dan 90 dB(A) tijdens een achturige werkdag, en daardoor lopen gymdocenten veel hoorschade op. Het is onze taak om een app te ontwikkelen die het bewustzijn vergroot en gymdocenten ondersteunt bij het reguleren van hun blootstelling aan geluid. "
          />
          <UiProject
            to="/individualproject"
            image-name="personalproject"
            project-name="Personal project"
            project-description="
            Dit document dient als een uitgebreid verslag van de verschillende stadia die ik heb doorlopen bij het samenstellen van mijn portfolio. Hierin wordt dieper ingegaan op de specifieke stappen en overwegingen die een rol speelden tijdens het onderzoeks-, ontwerp- en realisatieproces van mijn portfolio."
          />
          <UiProject
            to="/deliverable/ddw"
            image-name="ddw"
            project-name="Dutch Design Week"
            project-description="
            Van 23 t/m 25 oktober ben ik samen met mijn projectgroep en een Canadese student naar de Dutch Design Week geweest. Daarna moesten we met de inspiratie die we op de DDW hadden opgedaan gebruiken om een product te ontwerpen. Dit mocht alles zijn. In dit document kun je daar meer over lezen."
          />
          <UiProject
            to="/deliverable/weyweyweb"
            image-name="weyweyweb"
            project-name="Wey Wey Web"
            project-description="
            Van 22 t/m 25 november ben ik samen met Fontys naar Málaga geweest, om daar deel te nemen aan de Wey Wey Web conference. Dit is een conferentie gericht op iedereen die UI/UX, ontwerp en development interessant vindt. Hier leg ik uit hoe ik deze trip heb ervaren."
          />
        </div>
        <div>
          <div v-motion-slide-visible-once-bottom class="mt-4 w-full h-max rounded-3xl bg-blue40 dark:bg-blue100 flex lg:flex-row flex-col">
            <NuxtImg
              src="/img/mette.png"
              alt="mette"
              class="lg:rounded-l-3xl rounded-t-3xl w-full mr-4 object-cover"
            />

            <div class="p-7">
              <UiTypography type="h3" size="heading3" class="mb-2">
                Nice to meet you!
              </UiTypography>
              <UiTypography type="p">
                Mijn naam is Mette, ik ben momenteel 20 jaar oud en woon in Eindhoven. In mijn vrije tijd houd ik van gamen, gitaar spelen en tekenen. <br><br>

                Ik ben altijd al graag creatief bezig geweest, wat uitstekend samengaat met mijn enthousiasme voor computers. Op dit moment zit ik in mijn zesde semester van mijn studie ICT & Media Design.
                Mijn ambitie is om front-end webdeveloper te worden, gespecialiseerd in Vue.js en Nuxt. Dit is al een lang groeiende ambitie van me, en ik heb het geluk gehad dat ik tijdens mijn stage de kans heb gekregen om me in deze technologieën te verdiepen. Het komende semester wil ik deze vaardigheden graag verder ontwikkelen.
              </UiTypography>
            </div>
          </div>
          <div v-motion-slide-visible-once-bottom class="md:grid md:grid-cols-3 md:gap-3 mt-8 bg-white dark:bg-slate-800 py-7 rounded-3xl overflow-none">
            <div class="mb-4 md:mb-0 text-center">
              <UiTypography class="mb-1">
                Ik heb nu afgerond
              </UiTypography>
              <UiTypography type="h1" size="heading1">
                <vue3-autocounter
                  ref="semesterCounter"
                  :start-amount="0"
                  separator=""
                  :end-amount="5"
                  :duration="1.5"
                  :autoinit="false"
                />
              </UiTypography>
              <UiTypography class="mt-1" type="h3" size="heading3">
                semesters
              </UiTypography>
            </div>
            <div class="mb-4 md:mb-0 text-center">
              <UiTypography class="mb-1">
                Met in totaal meer dan
              </UiTypography>
              <UiTypography type="h1" size="heading1">
                <vue3-autocounter
                  ref="projectCounter"
                  :start-amount="0"
                  separator=""
                  :end-amount="38"
                  :duration="1.5"
                  :autoinit="false"
                />
              </UiTypography>
              <UiTypography class="mt-1" type="h3" size="heading3">
                projecten
              </UiTypography>
            </div>
            <div class="text-center">
              <UiTypography class="mb-1">
                Dit portfolio heeft nu
              </UiTypography>
              <UiTypography type="h1" size="heading1">
                <vue3-autocounter
                  ref="deliverableCounter"
                  :start-amount="0"
                  separator=""
                  :end-amount="40"
                  :duration="1.5"
                  :autoinit="false"
                />
              </UiTypography>
              <UiTypography class="mt-1" type="h3" size="heading3">
                deliverables
              </UiTypography>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>

<script>
import Vue3autocounter from 'vue3-autocounter'
export default {
  name: 'Numbers',
  components: {
    'vue3-autocounter': Vue3autocounter
  },
  data () {
    return {
      finishedCounting: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const scrollY = window.scrollY

      if (scrollY >= 1000 && this.finishedCounting === false) {
        this.finishedCounting = true
        this.start()
      }
    },
    start () {
      this.$refs.semesterCounter.start()
      this.$refs.projectCounter.start()
      this.$refs.deliverableCounter.start()
    }
  }
}
</script>
