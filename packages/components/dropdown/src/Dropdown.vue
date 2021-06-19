<template>
  <ix-overlay cls-prefix="ix-dropdown" allow-enter scroll-strategy="close">
    <template #trigger>
      <slot />
      <slot name="icon">
        <ix-icon v-if="icon" :name="icon" />
      </slot>
    </template>
    <template #overlay>
      <slot name="overlay" />
    </template>
  </ix-overlay>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { clickOutside } from '@idux/cdk/click-outside'
import { IxIcon } from '@idux/components/icon'
import { IxOverlay } from '@idux/components/private/overlay'
import { dropdownProps } from './types'

export default defineComponent({
  name: 'IxDropdown',
  components: { IxIcon, IxOverlay },
  directives: { clickOutside },
  props: dropdownProps,
  setup(props) {},
  render() {},
})
</script>
