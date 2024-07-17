
import { Checkbox } from "@mui/material"
import { StyledActions, StyledButtonWrapper, StyledCheck, StyledItemContainer, StyledMain } from "./styles"
import { Icon, SpanText } from "components"
import { ShoppingItem } from "typings/models"

export interface ItemProps {
  item: ShoppingItem
  onDelete: (id: string) => void
  onEdit: () => void
}

const Item = (props: ItemProps) => {
  const { item: { _id, name: title, description }, onDelete, onEdit } = props
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
        <StyledButtonWrapper onClick={onEdit}>
          <Icon name="Edit" />
        </StyledButtonWrapper>
        <StyledButtonWrapper onClick={() => onDelete(_id)}>
          <Icon name="Delete" />
        </StyledButtonWrapper>
      </StyledActions>
    </StyledItemContainer>
  )  
}

export default Item
