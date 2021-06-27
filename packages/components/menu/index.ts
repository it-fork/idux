import type { App, DefineComponent } from 'vue'

import { IxMenu } from './src'

const components = [IxMenu]

components.forEach(component => {
  component.install = (app: App & DefineComponent): void => {
    app.component(app.name, app)
  }
})

export { IxMenu }

export type { MenuInstance, MenuProps } from './src'
