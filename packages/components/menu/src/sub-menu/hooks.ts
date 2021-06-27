import type { ComputedRef, Slots, UnwrapRef } from 'vue'
import type { SubMenuProps } from './types'
import type { SubMenuSlotsProvider, SubMenuStateProvider } from './providers'

import { computed, getCurrentInstance, inject, provide } from 'vue'
import { useGlobalConfig } from '@idux/components/config'
import { useOpenProvider, useSelectProvider, useStateProvider } from '../menu/hooks'
import { subMenuSlotsProvider, subMenuStateProvider } from './providers'

export type SubMenuValue = ComputedRef<string | number>
export type SubMenuState = ComputedRef<Omit<Required<SubMenuProps>, 'icon'> & { icon: SubMenuProps['icon'] }>

export function useValue(): SubMenuValue {
  const { props, uid } = getCurrentInstance()!

  return computed(() => (props as SubMenuProps).value ?? uid)
}

export function useState(value: SubMenuValue): SubMenuState {
  const config = useGlobalConfig('subMenu')
  const props = getCurrentInstance()!.props as SubMenuProps

  return computed(() => Object.assign({}, props, { value: value.value }, config) as UnwrapRef<SubMenuState>)
}

export function useStatus(value: SubMenuValue): { selected: ComputedRef<boolean>; opened: ComputedRef<boolean> } {
  const selectProvider = useSelectProvider()
  const openProvider = useOpenProvider()

  const selected = computed(() => selectProvider.value.selected.includes(value.value))
  const opened = computed(() => openProvider.value.opened.includes(value.value))

  return { selected, opened }
}

export function useClassName({
  selected,
  opened,
}: ReturnType<typeof useStatus>): ComputedRef<(string | Record<string, boolean>)[]> {
  const menuStateProvider = useStateProvider()

  return computed(() => [
    'ix-menu-sub',
    `ix-menu-sub-${menuStateProvider.value.mode}`,
    {
      'ix-menu-sub-opened': opened.value,
      'ix-menu-sub-selected': selected.value,
    },
  ])
}

export function useIsInline(): ComputedRef<boolean> {
  const menuStateProvider = useStateProvider()
  return computed(() => menuStateProvider.value.mode === 'inline')
}

export function useSubMenuStateProvider(): SubMenuStateProvider
export function useSubMenuStateProvider(state: SubMenuState): void
export function useSubMenuStateProvider(state?: SubMenuState): SubMenuStateProvider | void {
  if (!state) {
    return inject(subMenuStateProvider)
  }
  provide(subMenuStateProvider, state)
}

export function useSlots(): SubMenuSlotsProvider
export function useSlots(slot: Slots): void
export function useSlots(slots?: Slots): SubMenuSlotsProvider | void {
  if (!slots) {
    return inject(subMenuSlotsProvider)
  }
  provide(
    subMenuSlotsProvider,
    computed(() => slots),
  )
}

export function useOpened(
  state: SubMenuStateProvider,
): { opened: ComputedRef<boolean>; onOpen(value: UnwrapRef<SubMenuValue>): void } {
  const openProvider = useOpenProvider()

  const opened = computed(() => openProvider.value.opened.includes(state.value.value))

  const handleOpen = openProvider.value.onOpen

  return { opened, onOpen: handleOpen }
}

export function useRotate(opened: ComputedRef<boolean>): ComputedRef<number> {
  const menuStateProvider = useStateProvider()
  const subMenuStateProvider = useSubMenuStateProvider()

  return computed(() => {
    if (menuStateProvider.value.mode === 'inline' && subMenuStateProvider.value) {
      const [expanded, collapsed] = subMenuStateProvider.value.suffixRotates
      return opened.value ? expanded : collapsed
    }
    return 0
  })
}
