<template>
  <div>
    <button class="fixed top-4 right-4" @click="toggleDarkMode">
      <div v-if="isDarkMode == false">
        <Sun class="h-3 w-3" />
      </div>
      <div v-if="isDarkMode == true">
        <Moon class="h-3 w-3" color="white" />
      </div>
    </button>
    <div :class="{ 'dark': isDarkMode }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'

</script>

<script>
export default {
  data () {
    return {
      isDarkMode: false
    }
  },
  mounted () {
    // Haal de waarde op uit localStorage en wijs het toe aan isDarkMode
    this.isDarkMode = JSON.parse(localStorage.getItem('darkMode')) || false
  },
  methods: {
    toggleDarkMode () {
      this.isDarkMode = !this.isDarkMode
      // Update localStorage met de nieuwe waarde van isDarkMode
      localStorage.setItem('darkMode', JSON.stringify(this.isDarkMode))
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
