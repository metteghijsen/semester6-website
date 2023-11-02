<template>
  <div class="bg-black10 dark:bg-slate-700 min-h-screen zoom-80 pb-[106px] pt-0.5">
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
