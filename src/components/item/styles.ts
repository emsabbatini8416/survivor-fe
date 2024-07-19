import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { SpanText } from 'components'

export const StyledItemContainer = styled.div`
  display: flex;
  width: 1024px;
  height: 86px;
  padding: 24px 16px;

  border-radius: 4px;
  border: 0.5px solid #d5dfe9;
`

export const StyledCheck = styled.div``
export const StyledMain = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 10px;
`
export const StyledActions = styled.div`
  display: flex;
`

export const StyledButtonWrapper = styled.div`
  :hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
export const StyledSpanText = styled(SpanText)<{ $isPurchased?: boolean }>`
  ${({ $isPurchased }) =>
    $isPurchased &&
    css`
      text-decoration: line-through;
    `}
`
