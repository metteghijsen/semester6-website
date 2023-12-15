<template>
  <button class="w-full rounded-full border-solid dark:border-slate-700 py-2 border-2 m-0.5 flex justify-center text-center items-center" :class="selected ? 'bg-' + color : 'bg-white100 dark:bg-slate-800' " @click="toggleSelected()">
    <UiTypography type="p" size="button-regular" :color="selected ? 'text-white100' : 'text-' + color">
      {{ label }}
    </UiTypography>
  </button>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    label: {
      type: String,
      default: 'Default label',
      required: true
    },
    color: {
      type: String,
      default: 'red100',
      required: true
    }
  },
  data () {
    return {
      selected: this.selected
    }
  },
  methods: {
    toggleSelected () {
      this.selected = !this.selected
    }
  }
})
</script>
