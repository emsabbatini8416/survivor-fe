import { PropsWithChildren } from 'react'
import { StyledPageContent } from './styles'

const PageContent = (props: PropsWithChildren<unknown>) => {
  return <StyledPageContent>{props.children}</StyledPageContent>
}

export default PageContent
