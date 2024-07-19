import styled from '@emotion/styled'
import { TextVariants } from '../../../utils/enums'
import { css } from '@emotion/react'

export type TextVariant = keyof typeof TextVariants

export interface StyledSpanProps {
  $variant: TextVariant
  $color: string
}

const textVariantsCSS = {
  [TextVariants.DOSIS_18_600_22]: () => css`
    font-family: 'Dosis', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 22px;
  `,
  [TextVariants.NUNITO_18_400_24]: () => css`
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
  `,
  [TextVariants.NUNITO_18_600_24]: () => css`
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  `,
  [TextVariants.NUNITO_16_600_20]: () => css`
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
  `,
  [TextVariants.NUNITO_14_400_20]: () => css`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,
  [TextVariants.NUNITO_14_600_20]: () => css`
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
  `,
}

export const StyledSpan = styled.span<StyledSpanProps>`
  color: ${(props) => props.$color};

  ${({ $variant }) => textVariantsCSS[$variant]}
`
