import type { OverlayElement } from '@idux/cdk/overlay'
import type { OverlayProps } from './types'

import {
  cloneVNode,
  computed,
  defineComponent,
  getCurrentInstance,
  onMounted,
  Ref,
  resolveDirective,
  Transition,
  withDirectives,
} from 'vue'
import { kebabCase } from 'lodash'
import { useOverlay } from '@idux/cdk/overlay'
import { getFirstValidNode, getSlotNodes } from '@idux/cdk/utils'
import { IxPortal } from '@idux/cdk/portal'
import { overlayProps } from './types'
import { useLogger, useRenderValid, useWatch } from './hooks'
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
      placement,
      update,
      hide,
    } = useOverlay(getOverlayOptions(props))
    const renderValid = useRenderValid()
    const triggerElement = useTrigger({ ...triggerEvents.value, ref: triggerRef }, hide, overlayRef)

    useWatch(visibility, placement, update)

    onMounted(initialize)

    return { overlayRef, overlayEvents, triggerRef, visibility, renderValid, placement, triggerElement }
  },
  render() {
    const {
      renderValid,
      $slots,
      overlayEvents,
      clsPrefix,
      visibility,
      visibleTransition,
      showArrow,
      placement,
      destroyOnHide,
      triggerElement,
    } = this

    if (!renderValid) {
      return null
    }

    const overlay = getFirstValidNode(getSlotNodes($slots, 'overlay'))!

    return (
      <>
        {triggerElement}
        <IxPortal target={`${clsPrefix}-container`}>
          <Transition name={visibleTransition}>
            {destroyOnHide ? (
              visibility && (
                <div
                  ref="overlayRef"
                  class={[clsPrefix, 'ix-overlay', `ix-overlay-${kebabCase(placement)}`]}
                  {...overlayEvents}
                >
                  {showArrow && <div class={['ix-overlay-arrow', `${clsPrefix}-arrow`]} />}
                  <div class={`${clsPrefix}-content`}>{overlay}</div>
                </div>
              )
            ) : (
              <div
                ref="overlayRef"
                v-show={visibility}
                class={[clsPrefix, 'ix-overlay', `ix-overlay-${kebabCase(placement)}`]}
                {...overlayEvents}
              >
                {showArrow && <div class={['ix-overlay-arrow', `${clsPrefix}-arrow`]} />}
                <div class={`${clsPrefix}-content`}>{overlay}</div>
              </div>
            )}
          </Transition>
        </IxPortal>
      </>
    )
  },
})

function useTrigger(extraProps: Record<string, any>, hide: () => void, trigger: Ref<OverlayElement | null>) {
  const { props, slots } = getCurrentInstance()!
  return computed(() => {
    const element = cloneVNode(getFirstValidNode(getSlotNodes(slots, 'trigger'))!, extraProps)
    if ((props as OverlayProps).trigger === 'click') {
      return (
        <>
          {withDirectives(element, [
            [
              resolveDirective('click-outside')!,
              {
                exclude: [trigger.value],
                handler: () => hide(),
              },
            ],
          ])}
        </>
      )
    }
    return <>{element}</>
  })
}
