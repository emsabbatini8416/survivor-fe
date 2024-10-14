import { SpanText } from 'components'
import {
  StyledCardBody,
  StyledCardBodyValue,
  StyledCardContainer,
  StyledCardFooter,
} from './styles'
import type { CardProps } from 'typings/components'

const Card = (props: CardProps) => {
  const { title, value } = props
  return (
    <StyledCardContainer>
      <StyledCardBody>
        <SpanText variant="INTER_600_16_26">{title}</SpanText>
        <StyledCardBodyValue>
          <SpanText variant="INTER_600_32_40">{value}</SpanText>
          <SpanText variant="INTER_400_12_18">Last 30 days</SpanText>
        </StyledCardBodyValue>
      </StyledCardBody>
      <StyledCardFooter>
        <SpanText variant="INTER_600_12_18" color="#312244">
          Download Report
        </SpanText>
      </StyledCardFooter>
    </StyledCardContainer>
  )
}

export default Card
