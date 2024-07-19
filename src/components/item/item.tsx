import { Checkbox } from '@mui/material'
import {
  StyledActions,
  StyledButtonWrapper,
  StyledCheck,
  StyledItemContainer,
  StyledMain,
  StyledSpanText,
} from './styles'
import { Icon } from 'components'
import { ShoppingItem } from 'typings/models'

export interface ItemProps {
  item: ShoppingItem
  onDelete: (id: string) => void
  onEdit: (item: ShoppingItem) => void
}

const Item = (props: ItemProps) => {
  const { item, onDelete, onEdit } = props
  const { _id, name: title, description, purchased } = item
  console.log(purchased)
  return (
    <StyledItemContainer>
      <StyledCheck>
        <Checkbox checked={purchased} />
      </StyledCheck>
      <StyledMain>
        <StyledSpanText variant="NUNITO_16_600_20" $isPurchased={purchased}>
          {title}
        </StyledSpanText>
        <StyledSpanText
          variant="NUNITO_16_600_20"
          $isPurchased={purchased}
          color="#7D7A7A"
        >
          {description}
        </StyledSpanText>
      </StyledMain>
      <StyledActions>
        <StyledButtonWrapper onClick={() => onEdit(item)}>
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
