<template>
  <ix-overlay
    :visible="false"
    trigger="hover"
    cls-prefix="ix-menu"
    allow-enter
    scroll-strategy="close"
    placement="rightStart"
    :hide-delay="30"
  >
    <template #trigger>
      <ix-sub-menu-title />
    </template>
    <template #overlay>
      <span>123123</span>
    </template>
  </ix-overlay>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IxOverlay } from '@idux/components/private/overlay'
import IxSubMenuTitle from './SubMenuTitle'

export default defineComponent({
  name: 'IxSubMenuContent',
  components: { IxOverlay, IxSubMenuTitle },
})
</script>
