import styled from '@emotion/styled'
import type { ChipProps } from 'typings/components'

export const StyledChip = styled.div<{ color: ChipProps['color'] }>`
  padding: 3px 10px;
  display: flex;
  gap: 6px;
  max-width: 90px;
  border-radius: 50px;

  ${({ color }) =>
    color === 'green'
      ? 'background-color: #E8F6ED;'
      : 'background-color: #FCEAEA;'}
`
