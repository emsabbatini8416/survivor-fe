import { Button, SpanText } from "components"
import { StyledListItemContainer, StyledListItemHeader } from "./styles"

export interface ItemListProps {
  onAdd: () => void
}

const ItemList = (props: React.PropsWithChildren<ItemListProps>) => {
  const { children, onAdd } = props
  return (
    <StyledListItemContainer>
      <StyledListItemHeader>
        <SpanText variant='NUNITO_18_600_24'>Your Items</SpanText>
        <Button onClick={onAdd}>Add Item</Button>
      </StyledListItemHeader>
      {children}
    </StyledListItemContainer>
  )
}

export default ItemList