import { cloneVNode, defineComponent, onMounted, Transition } from 'vue'
import { useOverlay } from '@idux/cdk/overlay'
import { getFirstValidNode, getSlotNodes } from '@idux/cdk/utils'
import { IxPortal } from '@idux/cdk/portal'

import { overlayProps } from './types'
import { useLogger, useRenderValid } from './hooks'
import { getOverlayOptions } from './utils'

export default defineComponent({
  name: 'IxOverlay',
  components: { IxPortal },
  props: overlayProps,
  setup(props) {
    useLogger()

    const {
      initialize,
      overlayRef,
      overlayEvents,
      triggerRef,
      triggerEvents,
      visibility,
      // placement,
      // update,
    } = useOverlay(getOverlayOptions(props))
    const renderValid = useRenderValid()

    // todo output events

    onMounted(initialize)

    return { overlayRef, overlayEvents, triggerRef, triggerEvents, visibility, renderValid }
  },
  render() {
    const { renderValid, $slots, triggerEvents, overlayEvents, clsPrefix, visibility, visibleTransition } = this

    if (!renderValid) {
      return null
    }

    const trigger = cloneVNode(getFirstValidNode(getSlotNodes($slots, 'trigger'))!, {
      ...triggerEvents,
      ref: 'triggerRef',
    })

    const overlay = getFirstValidNode(getSlotNodes($slots, 'overlay'))!

    return (
      <>
        {trigger}
        <IxPortal target={`${clsPrefix}-container`}>
          <Transition name={visibleTransition}>
            {visibility && (
              <div ref="overlayRef" class={[clsPrefix, 'ix-overlay']} {...overlayEvents}>
                <div class={`${clsPrefix}-content`}>{overlay}</div>
              </div>
            )}
          </Transition>
        </IxPortal>
      </>
    )
  },
})
