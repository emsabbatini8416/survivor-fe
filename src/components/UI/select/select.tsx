import {
  StyledLabel,
  StyledMenuItem,
  StyledSelect,
  StyleSelectWrapper,
} from './styles'
import { SelectProps as MuiSelectProps } from '@mui/material/Select'

export interface SelectOptionProps {
  value: string | number | null
  name: string
}

export type SelectProps<T = unknown> = {
  items: SelectOptionProps[]
  label: string
} & MuiSelectProps<T>

const Select = ({ items, label, name,  value, onChange }: SelectProps) => {
  return (
    <StyleSelectWrapper>
      <StyledLabel>{label}</StyledLabel>
      <StyledSelect name={name} value={value} onChange={onChange}>
        {items.map((item: SelectOptionProps, i: number) => (
          <StyledMenuItem key={i} value={item.value}>
            {item.name}
          </StyledMenuItem>
        ))}
      </StyledSelect>
    </StyleSelectWrapper>
  )
}

export default Select
