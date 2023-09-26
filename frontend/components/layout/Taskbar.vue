<template>
  <div class="justify-center flex my-8">
    <div class="bg-white100 px-[106px] py-3 flex justify-center rounded-full w-[1030px]">
      <router-link :to="links[0].to" class="px-2 link" :class="{ 'active-link': isActive(links[0].to) }">
        <UiTypography type="p" size="paragraph-small" :class="{ 'font-bold': isActive(links[0].to) }">
          Home
        </UiTypography>
        <div v-if="isActive(links[0].to)" class="bg-darkblue100 h-0.5 rounded-full" />
        <div v-else class="bg-darkblue100 h-0.5 rounded-full stripe" />
      </router-link>

      <router-link :to="links[1].to" class="px-2 link" :class="{ 'active-link': isActive(links[1].to) }">
        <UiTypography type="p" size="paragraph-small" :class="{ 'font-bold': isActive(links[1].to) }">
          Deliverables
        </UiTypography>
        <div v-if="isActive(links[1].to)" class="bg-darkblue100 h-0.5 rounded-full" />
        <div v-else class="bg-darkblue100 h-0.5 rounded-full stripe" />
      </router-link>

      <router-link :to="links[2].to" class="px-2 link" :class="{ 'active-link': isActive(links[2].to) }">
        <UiTypography type="p" size="paragraph-small" :class="{ 'font-bold': isActive(links[2].to) }">
          Projecten
        </UiTypography>
        <div v-if="isActive(links[2].to)" class="bg-darkblue100 h-0.5 rounded-full" />
        <div v-else class="bg-darkblue100 h-0.5 rounded-full stripe" />
      </router-link>

      <router-link :to="links[3].to" class="px-2 link" :class="{ 'active-link': isActive(links[4].to) }">
        <UiTypography type="p" size="paragraph-small" :class="{ 'font-bold': isActive(links[4].to) }">
          Leeswijzer
        </UiTypography>
        <div v-if="isActive(links[3].to)" class="bg-darkblue100 h-0.5 rounded-full" />
        <div v-else class="bg-darkblue100 h-0.5 rounded-full stripe" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    links () {
      return [
        { text: 'Home', to: '/' },
        { text: 'Deliverables', to: '/deliverables' },
        { text: 'Projecten', to: '/projecten' },
        { text: 'Leeswijzer', to: '/leeswijzer' }
      ]
    }
  },
  methods: {
    isActive (route) {
      return this.$route.path === route
    }
  }
}
</script>

<style scoped>
.active-link {
  font-weight: bold;
  color: #0000FF; /* Blauwe kleur voor de actieve link */
}

.stripe {
  width: 0;
  transition: width 0.4s;
  transition-timing-function: ease-in-out;
}

.link:hover .stripe{
  width: 100%;
  transition: width 0.4s;
  transition-timing-function: ease-in-out;
}
</style>
