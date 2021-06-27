import type { App, DefineComponent } from 'vue'

import { IxMenu, IxMenuItem, IxMenuDivider, IxMenuGroup } from './src'

const components = [IxMenu, IxMenuItem, IxMenuDivider, IxMenuGroup]

components.forEach(component => {
  component.install = (app: App & DefineComponent): void => {
    app.component(app.name, app)
  }
})

export { IxMenu, IxMenuItem, IxMenuDivider, IxMenuGroup }

export type { MenuInstance, MenuProps, MenuItemInstance, MenuItemProps, MenuGroupInstance, MenuGroupProps } from './src'
