import { StyledMenuItem, StyledSelect } from './styles'
import { SelectProps as MuiSelectProps } from '@mui/material/Select'

export interface SelectOptionProps {
  value: string | number | null
  name: string
}

export type SelectProps<T = unknown> = {
  items: SelectOptionProps[]
} & MuiSelectProps<T>

const Select = ({ items, value, onChange }: SelectProps) => {
  return (
    <StyledSelect value={value} onChange={onChange}>
      {items.map((item: SelectOptionProps, i: number) => (
        <StyledMenuItem key={i} value={item.value}>
          {item.name}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  )
}

export default Select
