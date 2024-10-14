import { InputHTMLAttributes } from 'react'
import { StyledInput, StyledLabel, StyleInputWrapper } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input = ({ label, ...rest }: InputProps) => {
  return (
    <StyleInputWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </StyleInputWrapper>
  )
}

export default Input
