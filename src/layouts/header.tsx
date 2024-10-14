import { SpanText } from 'components'
import { StyledHeader, StyledHeaderTitle } from './styles'
import { HeaderPageProps } from 'typings/components'

const Header = (props: HeaderPageProps) => {
  const { title, subtitle, rightSideComponent } = props
  return (
    <StyledHeader>
      <StyledHeaderTitle>
        <SpanText variant="INTER_500_20_18">{title}</SpanText>
        {subtitle && <SpanText variant="INTER_400_14_20">{subtitle}</SpanText>}
      </StyledHeaderTitle>

      <div>{rightSideComponent}</div>
    </StyledHeader>
  )
}

export default Header
