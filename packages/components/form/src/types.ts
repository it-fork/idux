import type { DefineComponent, HTMLAttributes } from 'vue'
import type { AbstractControl, ValidateStatus } from '@idux/cdk/forms'
import type { IxInnerPropTypes, IxPublicPropTypes } from '@idux/cdk/utils'
import type { ColProps } from '@idux/components/grid'

import { controlPropDef } from '@idux/cdk/forms'
import { IxPropTypes } from '@idux/cdk/utils'

export type FormLabelAlign = 'left' | 'right'
export type FormLayout = 'horizontal' | 'vertical' | `inline`
export type FormSize = 'small' | 'medium' | 'large'
export type FormMessageFn = (control: AbstractControl | null) => string
export type FormMessage = Partial<Record<ValidateStatus, string | FormMessageFn>>
export type ColType = string | number | ColProps

const colProp = IxPropTypes.oneOfType([String, Number, IxPropTypes.object<ColProps>()])

export const formProps = {
  colonless: IxPropTypes.bool,
  control: controlPropDef,
  controlCol: colProp,
  hasFeedback: IxPropTypes.bool.def(false),
  labelAlign: IxPropTypes.oneOf<FormLabelAlign>(['left', 'right']),
  labelCol: colProp,
  layout: IxPropTypes.oneOf<FormLayout>(['horizontal', 'vertical', 'inline']),
  size: IxPropTypes.oneOf<FormSize>(['large', 'medium', 'small']),
}

export type FormProps = IxInnerPropTypes<typeof formProps>
export type FormPublicProps = IxPublicPropTypes<typeof formProps>
export type FormComponent = DefineComponent<HTMLAttributes & typeof formProps>
export type FormInstance = InstanceType<DefineComponent<FormProps>>

export const formItemProps = {
  colonless: IxPropTypes.bool,
  control: controlPropDef,
  controlCol: colProp,
  extra: IxPropTypes.string,
  hasFeedback: IxPropTypes.bool,
  label: IxPropTypes.string,
  labelAlign: IxPropTypes.oneOf<FormLabelAlign>(['left', 'right']),
  labelCol: colProp,
  labelFor: IxPropTypes.string,
  labelTooltip: IxPropTypes.string,
  required: IxPropTypes.bool.def(false),
  message: IxPropTypes.oneOfType([String, IxPropTypes.func<FormMessageFn>(), IxPropTypes.object<FormMessage>()]),
  status: IxPropTypes.oneOf<ValidateStatus>(['valid', 'invalid', 'validating']),
}

export type FormItemProps = IxInnerPropTypes<typeof formItemProps>
export type FormItemPublicProps = IxPublicPropTypes<typeof formItemProps>
export type FormItemComponent = DefineComponent<HTMLAttributes & typeof formItemProps>
export type FormItemInstance = InstanceType<DefineComponent<FormItemProps>>

export const formWrapperProps = {
  control: controlPropDef,
}

export type FormWrapperProps = IxInnerPropTypes<typeof formWrapperProps>
export type FormWrapperPublicProps = IxPublicPropTypes<typeof formWrapperProps>
export type FormWrapperComponent = DefineComponent<typeof formWrapperProps>
export type FormWrapperInstance = InstanceType<DefineComponent<FormItemProps>>
