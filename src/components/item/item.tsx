
import { Checkbox } from "@mui/material"
import { StyledActions, StyledCheck, StyledItemContainer, StyledMain } from "./styles"
import { Icon, SpanText } from "components"

export interface ItemProps {
  title: string
  description: string
}

const Item = (props: ItemProps) => {
  const { title, description } = props
  return (
    <StyledItemContainer>
      <StyledCheck>
        <Checkbox />
      </StyledCheck>
      <StyledMain>
        <SpanText variant='NUNITO_16_600_20'>{title}</SpanText>
        <SpanText variant='NUNITO_16_600_20' color="#7D7A7A">{description}</SpanText>
      </StyledMain>
      <StyledActions>
        <Icon name="Edit" />
        <Icon name="Delete" />
      </StyledActions>
    </StyledItemContainer>
  )  
}

export default Item
