<template>
  <div>
    <UiContainer>
      <div class="h-full">
        <LayoutTaskbar />
        <div v-motion-slide-bottom class="flex flex-row">
          <iframe
            src="/documents/leeswijzerv1.3.pdf"
            width="1100px"
            height="1250px"
            title="leeswijzer"
            class="rounded-3xl"
          />
          <div class="ml-4 w-[600px] h-max bg-white100 border-slate-200 dark:bg-slate-800 dark:border-slate-600 border-2 rounded-3xl">
            <div class="m-4">
              <!-- Loop over de leeruitkomsten -->
              <div v-for="(outcome, index) in outcomes" :key="index">
                <UiTypography :type="'h4'" :size="'heading4'" :color="outcome.color" class="mt-5 flex flex-row cursor-pointer select-none" @click="toggleLearningOutcome(index)">
                  {{ outcome.title }}
                  <div v-if="outcome.show === false">
                    <ChevronRight class="dark:text-white100 text-black100" />
                  </div>

                  <div v-if="outcome.show === true">
                    <ChevronDown class="dark:text-white100 text-black100" />
                  </div>
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

<script setup>
import { ChevronRight, ChevronDown } from 'lucide-vue-next'

</script>

<script>
export default {
  data () {
    return {
      outcomes: [
        {
          title: 'UI (Analysis & Advice)',
          color: 'text-red100',
          links: [
            { to: '/deliverable/literaturestudy', text: '• Trendanalyse' },
            { to: '/deliverable/colorresearch', text: '• Color Research' },
            { to: '/deliverable/immersion', text: '• Immersion' },
            { to: '/deliverable/interview', text: '• Interview' },
            { to: '/deliverable/wireframes', text: '• Wireframing' },
            { to: '/deliverable/usertesting', text: '• Usertesting' },
            { to: '/deliverable/abtesting', text: '• A/B Testing' },
            { to: '/deliverable/c4model', text: '• C4 model' },
            { to: '/deliverable/survey', text: '• Survey' },
            { to: '/deliverable/expertinterview', text: '• Expert Interview' },
            { to: '/deliverable/moodboard', text: '• Moodboard UI/UX' },
            { to: '/deliverable/requirements', text: '• Requirements' },
            { to: '/deliverable/moscow', text: '• MoSCoW' },
            { to: '/deliverable/paperprototyping', text: '• Paper prototyping' },
            { to: '/deliverable/wireframinggos', text: '• Wireframing' },
            { to: '/deliverable/colorresearch2', text: '• Color Research' },
            { to: '/deliverable/brandguide', text: '• Brandguide' },
            { to: '/deliverable/components', text: '• Components' },
            { to: '/deliverable/wireframing2', text: '• Wireframing' },
            { to: '/deliverable/abctesting', text: '• A/B/C Testing' }
          ],
          show: true
        },
        {
          title: 'UI (Execution & Validation)',
          color: 'text-orange100',
          links: [
            { to: '/deliverable/wireframes', text: '• Wireframing' },
            { to: '/deliverable/usertesting', text: '• Usertesting' },
            { to: '/deliverable/abtesting', text: '• A/B Testing' },
            { to: '/deliverable/developmentwebsite', text: '• Development Website' },
            { to: '/deliverable/wireframinggos', text: '• Wireframing' },
            { to: '/deliverable/components', text: '• Components' },
            { to: '/deliverable/wireframing2', text: '• Wireframing' },
            { to: '/deliverable/abctesting', text: '• A/B/C Testing' }
          ],
          show: false
        },
        {
          title: 'Software Design & Realisation',
          color: 'text-yellow100',
          links: [
            { to: '/deliverable/developmentwebsite', text: '• Development Website' },
            { to: '/deliverable/c4model', text: '• C4 model' },
            { to: '/deliverable/pipeline', text: '• Pipeline' },
            { to: '/deliverable/darkmode', text: '• Darkmode' }
          ],
          show: false
        },
        {
          title: 'Future Oriented Organisation',
          color: 'text-green100',
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
            { to: '/deliverable/darkmode', text: '• Darkmode' },
            { to: '/deliverable/leeswijzer', text: '• Leeswijzer' },
            { to: '/deliverable/brainstorming', text: '• Brainstorming' },
            { to: '/deliverable/projectplangroup', text: '• Projectplan Group' },
            { to: '/deliverable/survey', text: '• Survey' },
            { to: '/deliverable/expertinterview', text: '• Expert Interview' },
            { to: '/deliverable/moodboard', text: '• Moodboard UI/UX' },
            { to: '/deliverable/requirements', text: '• Requirements' },
            { to: '/deliverable/moscow', text: '• MoSCoW' },
            { to: '/deliverable/paperprototyping', text: '• Paper prototyping' },
            { to: '/deliverable/colorresearch2', text: '• Color Research' },
            { to: '/deliverable/brandguide', text: '• Brandguide' },
            { to: '/deliverable/components', text: '• Components' },
            { to: '/deliverable/abctesting', text: '• A/B/C Testing' }
          ],
          show: false
        },
        {
          title: 'Personal Leadership',
          color: 'text-purple100',
          links: [
            { to: '/deliverable/leeswijzer', text: '• Leeswijzer' },
            { to: '/deliverable/developmentwebsite', text: '• Development Website' },
            { to: '/deliverable/postersession', text: '• Poster Session' },
            { to: '/deliverable/peerfeedback', text: '• Peer feedback' }
          ],
          show: false
        },
        {
          title: 'Goal-oriented Interaction',
          color: 'text-pink100',
          links: [
            { to: '/deliverable/projectplan', text: '• Projectplan' },
            { to: '/deliverable/c4model', text: '• C4 model' },
            { to: '/deliverable/leeswijzer', text: '• Leeswijzer' },
            { to: '/deliverable/ddw', text: '• Dutch Design Week' },
            { to: '/deliverable/architecturemuseum', text: '• Architecture Museum' },
            { to: '/deliverable/designmuseum', text: '• Design Museum' },
            { to: '/deliverable/postersession', text: '• Poster Session' },
            { to: '/deliverable/brainstorming', text: '• Brainstorming' },
            { to: '/deliverable/projectplangroup', text: '• Projectplan Group' },
            { to: '/deliverable/survey', text: '• Survey' },
            { to: '/deliverable/expertinterview', text: '• Expert Interview' },
            { to: '/deliverable/moodboard', text: '• Moodboard UI/UX' },
            { to: '/deliverable/requirements', text: '• Requirements' },
            { to: '/deliverable/moscow', text: '• MoSCoW' },
            { to: '/deliverable/paperprototyping', text: '• Paper prototyping' },
            { to: '/deliverable/brandguide', text: '• Brandguide' },
            { to: '/deliverable/weyweyweb', text: '• Wey Wey Web Malaga' }
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
