import type { ComputedRef } from 'vue'

import { computed, getCurrentInstance } from 'vue'
import { hasSlot, Logger } from '@idux/cdk/utils'

export function useLogger(): void {
  const { slots } = getCurrentInstance()!

  if (!hasSlot(slots, 'trigger')) {
    Logger.error('Component must contain trigger slot.')
  }

  if (!hasSlot(slots, 'overlay')) {
    Logger.error('Component must contain overlay slot.')
  }
}

export function useRenderValid(): ComputedRef<boolean> {
  const { slots } = getCurrentInstance()!
  return computed(() => hasSlot(slots, 'trigger') && hasSlot(slots, 'overlay'))
}
