import styled from '@emotion/styled'
import { TextVariants } from '../../../utils/enums'
import { css } from '@emotion/react'

export type TextVariant = keyof typeof TextVariants

export interface StyledSpanProps {
  $variant: TextVariant
  $color: string
}

const textVariantsCSS = {
  [TextVariants.INTER_600_32_40]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
  `,
  [TextVariants.INTER_600_18_24]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
  `,
  [TextVariants.INTER_600_16_26]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
  `,
  [TextVariants.INTER_600_14_20]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  `,
  [TextVariants.INTER_600_12_18]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
  `,
  [TextVariants.INTER_500_20_18]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
  `,
  [TextVariants.INTER_500_16_44]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 44px;
  `,
  [TextVariants.INTER_500_14_44]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 44px;
  `,
  [TextVariants.INTER_500_12_18]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
  `,
  [TextVariants.INTER_400_14_20]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  `,
  [TextVariants.INTER_400_12_18]: () => css`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  `,
}

export const StyledSpan = styled.span<StyledSpanProps>`
  color: ${(props) => props.$color};

  ${({ $variant }) => textVariantsCSS[$variant]}
`
