import { defineComponent } from 'vue'
import { IxOverlay } from '@idux/components/private/overlay'
import IxSubMenuTitle from './SubMenuTitle'
import IxSubMenuOverlay from './SubMenuOverlay'

export default defineComponent({
  name: 'IxSubMenuContent',
  components: { IxOverlay, IxSubMenuTitle, IxSubMenuOverlay },
  setup() {},
  render() {
    return (
      <IxOverlay
        visible={false}
        trigger="hover"
        clsPrefix="ix-menu"
        allowEnter
        scrollStrategy="close"
        placement="rightStart"
        hideDelay={30}
        showArrow={false}
      >
        {{ trigger: () => <IxSubMenuTitle />, overlay: () => <IxSubMenuOverlay /> }}
      </IxOverlay>
    )
  },
})
