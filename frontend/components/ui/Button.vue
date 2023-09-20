<template>
  <a v-if="type === 'href'" :href="to" class="primary" :class="{primary : primary, secondary: secondary, big: big, regular: regular}">
    <div v-if="big">
      <UiTypography type="p" size="button-big" :color="{primary: 'text-white100', secondary: 'text-darkblue100'}">
        {{ label }}
      </UiTypography>
    </div>
    <div v-else>
      <UiTypography type="p" size="button-regular" :color="{primary: 'text-white100', secondary: 'text-darkblue100'}">
        {{ label }}
      </UiTypography>
    </div>
    <img v-if="arrow === true" src="/img/arrow-right.png" alt="arrow-right" class="w-4 ml-2">
  </a>

  <NuxtLink v-else-if="type === 'router-link'" :to="to" class="primary" :class="{primary : primary, secondary: secondary, big: big, regular: regular}">
    <div v-if="big">
      <UiTypography type="p" size="button-big" :color="{primary: 'text-white100', secondary: 'text-darkblue100'}">
        {{ label }}
      </UiTypography>
    </div>
    <div v-else>
      <UiTypography type="p" size="button-regular" :color="{primary: 'text-white100', secondary: 'text-darkblue100'}">
        {{ label }}
      </UiTypography>
    </div>
    <img v-if="arrow === true" src="/img/arrow-right.png" alt="arrow-right" class="w-4 ml-2">
  </NuxtLink>

  <button v-else class="primary" :class="{primary : primary, secondary: secondary, big: big, regular: regular}" @click="$emit('click')">
    <div v-if="big">
      <UiTypography type="p" size="button-big" :color="{primary: 'text-white100', secondary: 'text-blue100'}">
        {{ label }}
      </UiTypography>
    </div>
    <div v-else>
      <UiTypography type="p" size="button-regular" :color="{primary: 'text-white100', secondary: 'text-blue100'}">
        {{ label }}
      </UiTypography>
    </div>
    <img v-if="arrow === true" src="/img/arrow-right.png" alt="arrow-right" class="w-4 ml-2">
  </button>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    to: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'Button',
      required: true
    },
    primary: Boolean,
    secondary: Boolean,
    disabled: Boolean,
    arrow: Boolean,
    big: Boolean,
    regular: Boolean
  },
  emits: ['click'],
  computed: {
    type () {
      if (this.to && !this.disabled) {
        return this.to.startsWith('http') ? 'href' : 'router-link'
      } else {
        return 'btn'
      }
    }
  }
})
</script>

  <style lang="postcss" scoped>
  .btn{
    @apply rounded-full justify-center items-center flex w-full
  }

  .big{
    @apply py-4 max-h-12
  }

  .regular{
    @apply py-2 max-h-9
  }

  .primary{
    @apply btn bg-darkblue100 text-white100
  }

  .secondary{
    @apply btn bg-white100 text-darkblue100 border-solid border-darkblue100 border-4
  }
  </style>
