import type { App, DefineComponent } from 'vue'

import { IxMenu, IxMenuItem } from './src'

const components = [IxMenu, IxMenuItem]

components.forEach(component => {
  component.install = (app: App & DefineComponent): void => {
    app.component(app.name, app)
  }
})

export { IxMenu, IxMenuItem }

export type { MenuInstance, MenuProps, MenuItemInstance, MenuItemProps } from './src'
