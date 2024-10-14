import type { ChipProps } from 'typings/components'
import { SpanText } from '../text'
import { StyledChip } from './styles'

const Chip = (props: ChipProps) => {
  const { label, color } = props
  return (
    <StyledChip color={color}>
      <SpanText
        variant="INTER_600_14_20"
        color={color === 'red' ? '#E73F3F' : '#01A63E'}
      >
        &#x2022;
      </SpanText>
      <SpanText
        variant="INTER_600_14_20"
        color={color === 'red' ? '#E73F3F' : '#01A63E'}
      >
        {label}
      </SpanText>
    </StyledChip>
  )
}

export default Chip
