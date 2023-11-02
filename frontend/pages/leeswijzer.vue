<template>
  <div>
    <UiContainer>
      <div class="h-full">
        <LayoutTaskbar />
        <div v-motion-slide-bottom class="flex flex-row">
          <iframe
            src="/documents/leeswijzerv1.pdf"
            width="1100px"
            height="1250px"
            title="leeswijzer"
            class="rounded-3xl"
          />
          <div class="ml-4 w-[600px] h-max bg-white100 dark:bg-slate-800 rounded-3xl">
            <div class="m-4">
              <!-- Loop over de leeruitkomsten -->
              <div v-for="(outcome, index) in outcomes" :key="index">
                <UiTypography :type="'h4'" :size="'heading4'" :color="outcome.color" class="mt-5 flex flex-row">
                  {{ outcome.title }}
                  <NuxtImg
                    v-if="outcome.show === false"
                    :src="outcome.iconFalse"
                    class="w-3 cursor-pointer"
                    @click="toggleLearningOutcome(index)"
                  />

                  <NuxtImg
                    v-if="outcome.show === true"
                    :src="outcome.iconTrue"
                    class="w-3 cursor-pointer"
                    @click="toggleLearningOutcome(index)"
                  />
                </UiTypography>

                <div v-if="outcome.show === true">
                  <!-- Loop over de links voor deze leeruitkomst -->
                  <NuxtLink v-for="(link, linkIndex) in outcome.links" :key="linkIndex" :to="link.to">
                    <UiTypography :type="'p'" class="ml-3 my-0.5 hover:opacity-50 transition-all">
                      {{ link.text }}
                    </UiTypography>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UiContainer>
    <SectionsFooter />
  </div>
</template>

<script>
export default {
  data () {
    return {
      outcomes: [
        {
          title: 'UI (Analysis & Advice)',
          color: 'text-red100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/literaturestudy', text: '• Trendanalyse' },
            { to: '/deliverable/colorresearch', text: '• Color Research' },
            { to: '/deliverable/immersion', text: '• Immersion' },
            { to: '/deliverable/interview', text: '• Interview' },
            { to: '/deliverable/wireframes', text: '• Wireframing' },
            { to: '/deliverable/usertesting', text: '• Usertesting' },
            { to: '/deliverable/abtesting', text: '• A/B Testing' },
            { to: '/deliverable/c4model', text: '• C4 model' }
          ],
          show: true
        },
        {
          title: 'UI (Execution & Validation)',
          color: 'text-orange100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/wireframes', text: '• Wireframing' },
            { to: '/deliverable/usertesting', text: '• Usertesting' },
            { to: '/deliverable/abtesting', text: '• A/B Testing' },
            { to: '/deliverable/developmentwebsite', text: '• Development Website' }
          ],
          show: false
        },
        {
          title: 'Software Design & Realisation',
          color: 'text-yellow100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/developmentwebsite', text: '• Development Website' },
            { to: '/deliverable/c4model', text: '• C4 model' },
            { to: '/deliverable/pipeline', text: '• Pipeline' }
          ],
          show: false
        },
        {
          title: 'Future Oriented Organisation',
          color: 'text-green100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/projectplan', text: '• Projectplan' },
            { to: '/deliverable/leeswijzer', text: '• Leeswijzer' },
            { to: '/deliverable/brainstorming', text: '• Brainstorming' },
            { to: '/deliverable/projectplangroup', text: '• Projectplan Group' }
          ],
          show: false
        },
        {
          title: 'Investigative Problem Solving',
          color: 'text-blue100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/projectplan', text: '• Projectplan' },
            { to: '/deliverable/literaturestudy', text: '• Trendanalyse' },
            { to: '/deliverable/colorresearch', text: '• Color Research' },
            { to: '/deliverable/immersion', text: '• Immersion' },
            { to: '/deliverable/interview', text: '• Interview' },
            { to: '/deliverable/usertesting', text: '• Usertesting' },
            { to: '/deliverable/abtesting', text: '• A/B Testing' },
            { to: '/deliverable/c4model', text: '• C4 model' },
            { to: '/deliverable/pipeline', text: '• Pipeline' },
            { to: '/deliverable/leeswijzer', text: '• Leeswijzer' },
            { to: '/deliverable/brainstorming', text: '• Brainstorming' },
            { to: '/deliverable/projectplangroup', text: '• Projectplan Group' }
          ],
          show: false
        },
        {
          title: 'Personal Leadership',
          color: 'text-purple100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/developmentwebsite', text: '• Development Website' },
            { to: '/deliverable/postersession', text: '• Poster Session' }
          ],
          show: false
        },
        {
          title: 'Goal-oriented Interaction',
          color: 'text-pink100',
          iconTrue: 'img/chevron-down.png',
          iconFalse: 'img/chevron-right.png',
          links: [
            { to: '/deliverable/projectplan', text: '• Projectplan' },
            { to: '/deliverable/c4model', text: '• C4 model' },
            { to: '/deliverable/leeswijzer', text: '• Leeswijzer' },
            { to: '/deliverable/postersession', text: '• Poster Session' },
            { to: '/deliverable/brainstorming', text: '• Brainstorming' },
            { to: '/deliverable/projectplangroup', text: '• Projectplan Group' }
          ],
          show: false
        }
      ]
    }
  },
  methods: {
    toggleLearningOutcome (index) {
      this.outcomes[index].show = !this.outcomes[index].show
    }
  }
}
</script>
