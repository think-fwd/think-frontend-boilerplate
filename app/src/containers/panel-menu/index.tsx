import { Container, Wrapper } from './styles'
import { PanelMenuItem } from './components/item'
import { Faders, Gauge, Signature, Users } from '@phosphor-icons/react'
import { useParams } from 'react-router-dom'
import { Divider, Typography } from '@mui/material'

export const PanelMenu = (): JSX.Element | null => {
  const { id: organizationId } = useParams<{ id: string }>()
  return (
    <Wrapper>
      <Container>
        <PanelMenuItem
          icon={Gauge}
          label="Dashboard"
          href={`/organizations/${organizationId}`}
        />
        <PanelMenuItem
          icon={Users}
          label="Membros"
          href={`/organizations/${organizationId}/members`}
        />
        <Divider textAlign="left" sx={{ my: 1 }}>
          <Typography variant="caption" color="muted.main">
            minha conta
          </Typography>
        </Divider>
        <PanelMenuItem
          disabled
          icon={Signature}
          label="Assinatura"
          href={`/organizations/${organizationId}/subscription`}
        />
        <PanelMenuItem
          disabled
          icon={Faders}
          label="Configurações"
          href={`/organizations/${organizationId}/settings`}
        />
      </Container>
    </Wrapper>
  )
}
