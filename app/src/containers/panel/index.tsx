import { Outlet } from 'react-router-dom'
import { PanelContainer, PanelSide, PanelSidePadding } from './styles'
import { InviteBox } from '@containers/invite-box'
import { PanelMenu } from '@containers/panel-menu'

export const Panel = (): JSX.Element => {
  return (
    <PanelContainer container>
      <PanelSide item sx={{ maxWidth: 250 }}>
        <PanelMenu />
      </PanelSide>
      <PanelSide item sx={{ flex: 1 }}>
        <InviteBox />
        <PanelSidePadding p={3}>
          <Outlet />
        </PanelSidePadding>
      </PanelSide>
    </PanelContainer>
  )
}
