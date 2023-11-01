<template>
  <div>
    <button class="fixed top-4 right-4" @click="toggleDarkMode">
      <div v-if="isDarkMode == false">
        <NuxtImg src="img/lightmode.png" />
      </div>
      <div v-if="isDarkMode == true">
        <NuxtImg src="img/darkmode.png" />
      </div>
    </button>
    <div :class="{ 'dark': isDarkMode }">
      <slot />
    </div>
  </div>
</template>

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
      console.log(this.isDarkMode)
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
