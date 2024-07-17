import React from 'react';
import { StyledSpan } from './styles';
import type { TextVariant } from './styles';

export interface TextProps {
  variant: TextVariant
  color?: string
}

const SpanText = ({ children, color = 'black', variant } : React.PropsWithChildren<TextProps>) => (
  <StyledSpan $variant={variant} $color={color}>
    {children}
  </StyledSpan>
);

export default SpanText
