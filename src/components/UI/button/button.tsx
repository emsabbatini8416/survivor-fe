import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
}

const Button = styled.button<ButtonProps>`
  width: 151px;
  height: 36px;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;

  font-family: Nunito;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  color: white;
  background-color: #1871e8;

  :hover {
    cursor: pointer;
    opacity: 0.9;
  }

  ${({ variant = 'primary' }) =>
    variant === 'secondary' &&
    `
    color: black;
    background-color: white;
  `}
`

export default Button
