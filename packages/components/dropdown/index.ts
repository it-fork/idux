import type { App } from 'vue'

import IxDropdown from './src/Dropdown.vue'
// import IxDropdownButton from './src/DropdownButton.vue'

IxDropdown.install = (app: App): void => {
  app.component(IxDropdown.name, IxDropdown)
}
//
// IxDropdownButton.install = (app: App): void => {
//   app.component(IxDropdown.name, IxDropdown)
// }

export { IxDropdown }
// export { IxDropdown, IxDropdownButton }

export type { DropdownInstance, DropdownProps, DropdownButtonInstance, DropdownButtonProps } from './src/types'

// todo export { dropdownToken as ɵDropdownToken } from './src/token'
