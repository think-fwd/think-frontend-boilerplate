import { WrapperComponent } from '@containers/wrapper'
import { ActiveAccountSelector } from './container/selector'
import { WrapperInnerComponent } from '@containers/wrapper-inner'
import { Container } from '@mui/material'

export const ActiveAccountView = (): JSX.Element => {
  return (
    <WrapperComponent>
      <WrapperInnerComponent>
        <Container sx={{ pt: 12, pb: 16 }}>
          <ActiveAccountSelector />
        </Container>
      </WrapperInnerComponent>
    </WrapperComponent>
  )
}
