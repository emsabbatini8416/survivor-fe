import { PropsWithChildren } from 'react'
import { Wrapper } from './styles'

const WrapperPage = (props: PropsWithChildren<unknown>) => (
  <Wrapper>{props.children}</Wrapper>
)

export default WrapperPage
