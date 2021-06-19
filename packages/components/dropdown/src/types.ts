import type { DefineComponent } from 'vue'

import { IxExtractPropTypes, IxPropTypes } from '@idux/cdk/utils'
import { overlayPlacementDef, overlayTriggerDef } from '@idux/components/private/overlay/src/types'

export const dropdownProps = {
  visible: IxPropTypes.bool.def(false),
  disabled: IxPropTypes.bool.def(false),
  icon: IxPropTypes.string,
  overlayClass: IxPropTypes.string,
  placement: overlayPlacementDef,
  trigger: overlayTriggerDef,
}

export type DropdownProps = IxExtractPropTypes<typeof dropdownProps>

export type DropdownInstance = InstanceType<DefineComponent<DropdownProps>>

export const dropdownButtonProps = {
  ...dropdownProps,
  icon: IxPropTypes.string.def('ellipsis'),
}

export type DropdownButtonProps = IxExtractPropTypes<typeof dropdownButtonProps>

export type DropdownButtonInstance = InstanceType<DefineComponent<DropdownButtonProps>>
