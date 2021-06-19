import { mount, MountingOptions } from '@vue/test-utils'
import { renderWork } from '@tests'
import IxDropdown from '../src/Dropdown.vue'
import { DropdownInstance, DropdownProps } from '../src/types'

describe('Dropdown.tsx', () => {
  const DropdownMount = (options?: MountingOptions<Partial<DropdownProps>>) => mount(IxDropdown, { ...options })

  renderWork(IxDropdown)
})
