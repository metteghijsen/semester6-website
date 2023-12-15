<template>
  <div :class="[darkModeClass, 'gradient-background-light min-h-screen zoom-80 pb-[106px] pt-0.5 overflow-hidden']">
    <div class="max-w-[1460px] mx-auto px-3 relative z-10">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.zoom-80{
  zoom: 80%;
}
.gradient-background-light {
  background: linear-gradient(-45deg, #fce2da, #ffe3ed, #d5f4ff, #d6fff5);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.dark .gradient-background-light {
  background: linear-gradient(-45deg, #4d1a0b, #4d021f, #003447, #005a47)
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
