import type { App, DefineComponent } from 'vue'

import { IxMenu, IxMenuItem, IxMenuDivider } from './src'

const components = [IxMenu, IxMenuItem, IxMenuDivider]

components.forEach(component => {
  component.install = (app: App & DefineComponent): void => {
    app.component(app.name, app)
  }
})

export { IxMenu, IxMenuItem, IxMenuDivider }

export type { MenuInstance, MenuProps, MenuItemInstance, MenuItemProps } from './src'
