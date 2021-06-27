import { computed, defineComponent } from 'vue'
import { getSlotNodes } from '@idux/cdk/utils'
import { useSlots } from '../hooks'
import { useStateProvider } from '../../menu/hooks'

export default defineComponent({
  name: 'IxSubMenuOverlay',
  setup() {
    const slots = useSlots()
    const stateProvider = useStateProvider()
    const className = computed(() => ['ix-menu-vertical', 'ix-menu-content', `ix-menu-${stateProvider.value.theme}`])

    return { slots, className }
  },
  render() {
    const { slots, className } = this

    return <ul class={className}>{getSlotNodes(slots)}</ul>
  },
})
