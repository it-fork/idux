import type { ComponentPublicInstance, ComputedRef, Ref } from 'vue'

export type OverlayScrollStrategy = 'close' | 'reposition' | 'none'
export type OverlayTrigger = 'click' | 'hover' | 'focus' | 'contextmenu' | 'manual'
export type OverlayElement = ComponentPublicInstance | HTMLElement
export type OverlayPlacement =
  | 'topStart'
  | 'top'
  | 'topEnd'
  | 'rightStart'
  | 'right'
  | 'rightEnd'
  | 'bottomStart'
  | 'bottom'
  | 'bottomEnd'
  | 'leftStart'
  | 'left'
  | 'leftEnd'

export interface OverlayTriggerEvents {
  onClick?(event: Event): void
  onMouseenter?(event: Event): void
  onMouseleave?(event: Event): void
  onFocus?(event: Event): void
  onBlur?(event: Event): void
  onContextmenu?(event: Event): void
}

export interface OverlayPopperEvents {
  onMouseenter(): void
  onMouseleave(): void
}

export interface EventOptions {
  visibility: ComputedRef<boolean>
  state: Required<OverlayOptions>
  timer: Ref<number | null>
  show(): void
  hide(): void
}

export interface OverlayOptions {
  /**
   * Control the visibility of the overlay
   */
  visible?: boolean
  /* Scroll strategy for overlay */
  scrollStrategy?: OverlayScrollStrategy
  /* Disable the overlay */
  disabled?: boolean
  /* Alignment of overlay */
  placement?: OverlayPlacement
  /* Trigger method. */
  trigger?: OverlayTrigger
  /* Whether to allow the mouse to enter the overlay. */
  allowEnter?: boolean
  /* Whether auto adjust when space is not enough. */
  autoAdjust?: boolean
  /**
   * Overlay offset.
   * [Horizontal axis offset, vertical axis offset]
   */
  offset?: [number, number]
  /**
   * The delay of hiding overlay.
   * Send 0 if you don't need it.
   */
  hideDelay?: number
  /**
   * The delay of showing overlay.
   * Send 0 if you don't need it.
   */
  showDelay?: number
}

export interface OverlayInstance<
  TE extends OverlayElement = OverlayElement,
  OE extends OverlayElement = OverlayElement
> {
  /**
   * Initialize the overlay.
   * The life cycle of the overlay will enter mounted.
   */
  initialize: () => void
  /**
   * Show the overlay.
   * The style of the overlay container will be set to block.
   */
  show: (showDelay?: number) => void
  /**
   * Hide the overlay.
   * The style of the overlay container will be set to none.
   */
  hide: (hideDelay?: number) => void
  /**
   * Update overlay.
   * If the overlay has not been initialized, the overlay will be initialized first, otherwise the overlay will be update directly.
   * @param options
   */
  update: (options?: Partial<OverlayOptions>) => void
  /**
   * Destroy the overlay.
   * The life cycle of the overlay will enter beforeDestroy.
   * To show the overlay again, please recreate.
   */
  destroy: () => void
  /**
   * The display status of the current overlay.
   * Control by visible and disable.
   */
  visibility: ComputedRef<boolean>
  /**
   * The current true position of the overlay.
   */
  placement: ComputedRef<OverlayPlacement>
  /**
   * The truth DOM node of the trigger.
   * The caller needs to bind the variable to the view.
   */
  triggerRef: Ref<TE | null>
  /**
   * Manually bind to the event on the trigger.
   */
  triggerEvents: ComputedRef<OverlayTriggerEvents>
  /**
   * The truth DOM node of the overlay.
   * The caller needs to bind the variable to the view.
   */
  overlayRef: Ref<OE | null>
  /**
   * Manually bind to events on the overlay.   */
  overlayEvents: ComputedRef<OverlayPopperEvents>
}
