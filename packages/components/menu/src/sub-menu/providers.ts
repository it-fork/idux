import type { ComputedRef, InjectionKey, Slot } from 'vue'
import type { SubMenuState } from './hooks'

export type SubMenuStateProvider = SubMenuState
export const subMenuStateProvider: InjectionKey<SubMenuStateProvider> = Symbol('subMenuState')

export type SubMenuSlotsProvider = ComputedRef<Record<'default' | 'icon' | 'suffix', Slot>>
export const subMenuSlotsProvider: InjectionKey<SubMenuSlotsProvider> = Symbol('subMenuSlots')
