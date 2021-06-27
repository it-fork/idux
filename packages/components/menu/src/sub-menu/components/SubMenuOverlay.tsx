import { computed, defineComponent } from 'vue'
import { getSlotNodes } from '@idux/cdk/utils'
import { useSlots, useSubMenuStateProvider } from '../hooks'
import { useStateProvider } from '../../menu/hooks'

export default defineComponent({
  name: 'IxSubMenuOverlay',
  setup() {
    const slots = useSlots()
    const stateProvider = useStateProvider()
    const subStateProvider = useSubMenuStateProvider()
    const className = computed(() => [
      'ix-menu-vertical',
      'ix-menu-overlay',
      `ix-menu-${stateProvider.value.theme}`,
      subStateProvider.value.overlayClass,
    ])

    return { slots, className }
  },
  render() {
    const { slots, className } = this

    return <ul class={className}>{getSlotNodes(slots)}</ul>
  },
})
