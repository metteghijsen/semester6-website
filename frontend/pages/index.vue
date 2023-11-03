<template>
  <div>
    <UiContainer>
      <div>
        <LayoutTaskbar />
        <div class="px-[200px] pt-[160px] flex flex-col">
          <UiTypography v-motion-slide-bottom type="h1" size="heading1">
            Mette Ghijsen
          </UiTypography>
          <UiTypography v-motion-slide-bottom type="h3" size="heading3" class="pb-6">
            S6 Advanced Media Design, Research Based
          </UiTypography>
          <div v-motion-slide-bottom class="flex justify-start w-[900px]">
            <div class="w-[400px] my-2 mr-2">
              <UiButton label="deliverables" primary big arrow to="/deliverables" />
            </div>
            <div class="w-[400px] my-2">
              <UiButton label="leeswijzer" secondary big to="/leeswijzer" />
            </div>
          </div>
        </div>
        <div>
          <div v-motion-slide-visible-once-bottom class="mt-[350px] w-full h-max rounded-3xl bg-blue40 dark:bg-blue100 p-7 flex flex-row">
            <NuxtImg
              src="/img/mette.png"
              alt="mette"
              class="rounded-3xl max-w-[600px] mr-4"
            />

            <div>
              <UiTypography type="h3" size="heading3" class="mb-2">
                Nice to meet you!
              </UiTypography>
              <UiTypography type="p">
                Mijn naam is Mette , ik ben momenteel 20 jaar oud en woon in Eindhoven. In mijn vrije tijd houd ik van gamen, gitaar spelen en tekenen. <br><br>

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
                  :end-amount="15"
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

      if (scrollY >= 500 && this.finishedCounting === false) {
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
