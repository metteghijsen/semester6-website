<template>
  <div class="bg-black10 dark:bg-slate-700 bg-repeat min-h-screen zoom-80 pb-[106px]">
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
