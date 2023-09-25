<template>
  <div class="bg-black10 min-h-screen zoom-80">
    <div class="max-w-[1460px] mx-auto px-3">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.zoom-80 {
  zoom: 80%;
}
</style>
