import styled from '@emotion/styled'
import { MenuItem, Select } from '@mui/material'

export const StyleSelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const StyledLabel = styled.label`
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #5a5c60;
`

export const StyledSelect = styled(Select)`
  height: 40px;
  outline: none;
`

export const StyledMenuItem = styled(MenuItem)``
