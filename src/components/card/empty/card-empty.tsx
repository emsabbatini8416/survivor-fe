

import { Button, SpanText } from "components"
import { StyledCardEmptyContainer } from "./styles"

export interface CardEmptyProps {
  onAdd: () => void
}

const CardEmpty = (props: CardEmptyProps) => {
  const { onAdd } = props
  return (
    <StyledCardEmptyContainer>
      <SpanText variant='NUNITO_14_400_20' color='#87898C'>{`Your shopping list is empty :(`}</SpanText>
      <Button onClick={onAdd}>Add your first item</Button>
    </StyledCardEmptyContainer>
  )

}

export default CardEmpty
