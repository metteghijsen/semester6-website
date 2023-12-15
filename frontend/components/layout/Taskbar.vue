<template>
  <div>
    <div class="justify-center flex mb-[150px]">
      <div class="bg-white100 border-b-slate-200 dark:bg-slate-800 dark:border-b-slate-600 border-b-3 py-5 flex flex-row items-center flex-wrap w-full fixed top-0 z-40">
        <NuxtLink to="/">
          <UiTypography type="p" size="heading4" class="font-bold px-8 mr-[800px]">
            Mette Ghijsen
          </UiTypography>
        </NuxtLink>
        <router-link
          v-for="(link, index) in links"
          :key="index"
          :to="link.to"
          class="px-2 link"
          :class="{ 'active-link': isActive(link.to) }"
        >
          <UiTypography type="p" size="paragraph-small" :class="{ 'font-bold': isActive(link.to) }">
            {{ link.text }}
          </UiTypography>
          <div
            v-if="isActive(link.to)"
            class="bg-darkblue100 dark:bg-blue100 h-0.5 rounded-full"
          />
          <div
            v-else
            class="bg-darkblue100 dark:bg-blue100 h-0.5 rounded-full stripe"
          />
        </router-link>
      </div>
    </div>

    <button class="z-50 fixed top-5 right-[160px]" @click="toggleDarkMode">
      <div v-if="isDarkMode == false">
        <Sun class="h-3 w-3" />
      </div>
      <div v-if="isDarkMode == true">
        <Moon class="h-3 w-3" color="white" />
      </div>
    </button>

    <NuxtLink to="https://github.com/metteghijsen/semester6-website" class="z-50 fixed top-5 right-[205px]">
      <div v-if="isDarkMode == false">
        <Github class="h-3 w-3" />
      </div>
      <div v-if="isDarkMode == true">
        <Github class="h-3 w-3" color="white" />
      </div>
    </NuxtLink>

    <div :class="{ 'dark': isDarkMode }">
      <div class="transition-colors ease-in-out delay-150">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Sun, Moon, Github } from 'lucide-vue-next'

const isDarkMode = ref(false)

const links = [
  { text: 'Deliverables', to: '/deliverables' },
  { text: 'Leeswijzer', to: '/leeswijzer' },
  { text: 'Individual project', to: '/individualproject' },
  { text: 'Group project', to: '/groupproject' },
  { text: 'International project', to: '/internationalproject' }
]

const isActive = (route) => {
  if (process.client) {
    return window.location.pathname === route
  }
  return false
}

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value

  localStorage.setItem('darkMode', JSON.stringify(isDarkMode.value))

  if (isDarkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
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
}

.link:hover .stripe {
  width: 100%;
  transition: width 0.4s;
  transition-timing-function: ease-in-out;
  opacity: 80%;
}
</style>
