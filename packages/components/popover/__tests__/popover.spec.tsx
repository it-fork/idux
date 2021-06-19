import type { MountingOptions } from '@vue/test-utils'
import type { PopoverProps } from '../src/types'

import { mount, VueWrapper } from '@vue/test-utils'
import { renderWork, wait } from '@tests'
import IxPopover from '../src/Popover.vue'

describe('Popover.vue', () => {
  let PopoverMount: (options?: MountingOptions<Partial<PopoverProps>>) => VueWrapper<InstanceType<typeof IxPopover>>

  beforeEach(() => {
    PopoverMount = options => mount(IxPopover as any, { ...options }) as any
  })

  renderWork(IxPopover)

  test('placement', async () => {
    jest.spyOn(console, 'warn').mockImplementation(() => {})
    const popoverWrapper = PopoverMount({
      slots: {
        default: <span id="trigger">Hello world</span>,
      },
      props: {
        title: 'prompt text',
      },
    })
    await popoverWrapper.get('#trigger').trigger('mouseenter')
    await wait(100)
    expect(document.querySelector('.ix-popover')!.getAttribute('placement')).toEqual('top')

    await popoverWrapper.setProps({ placement: 'bottom' })
    expect(document.querySelector('.ix-popover')!.getAttribute('placement')).toEqual('bottom')

    await popoverWrapper.setProps({ placement: 'left' })
    expect(document.querySelector('.ix-popover')!.getAttribute('placement')).toEqual('left')

    await popoverWrapper.setProps({ placement: 'right' })
    expect(document.querySelector('.ix-popover')!.getAttribute('placement')).toEqual('right')
  })
})
