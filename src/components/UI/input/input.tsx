import { InputHTMLAttributes } from "react"
import { StyledInput, StyledTextArea } from "./styles"

export interface InputProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>  {
  isTextArea?: boolean
}

const Input = ({ isTextArea = false, ...rest }: InputProps) => {

  if (isTextArea) {
    return <StyledTextArea {...rest} rows={5} />
  }

  return (
    <StyledInput {...rest} />
  )
}

export default Input