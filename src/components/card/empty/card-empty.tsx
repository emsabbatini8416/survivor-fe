

import { Button, SpanText } from "components"
import { StyledCardEmptyContainer } from "./styles"

export interface CardEmptyProps {
  handleOnAdd: () => void
}

const CardEmpty = (props: CardEmptyProps) => {
  const { handleOnAdd } = props
  return (
    <StyledCardEmptyContainer>
      <SpanText variant='NUNITO_14_400_20' color='#87898C'>{`Your shopping list is empty :(`}</SpanText>
      <Button onClick={handleOnAdd}>Add your first item</Button>
    </StyledCardEmptyContainer>
  )

}

export default CardEmpty
