import { Footer } from '../footer'
import { Header } from '../header'
import { Wrapper } from './styles'
import { WrapperProps } from './types'

export const WrapperComponent = (props: WrapperProps): JSX.Element => {
  return (
    <Wrapper.Root fullwidth={String(props.fullWidth) as 'true' | 'false'}>
      <Header />
      <Wrapper.Content>{props.children}</Wrapper.Content>
      <Wrapper.Footer>
        <Footer />
      </Wrapper.Footer>
    </Wrapper.Root>
  )
}
