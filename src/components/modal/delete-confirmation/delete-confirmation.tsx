import { Button, SpanText } from 'components'
import {
  StyledDeleteConfirmationButtonsContainer,
  StyledDeleteConfirmationContainer,
} from './styles'

export interface DeleteConfirmationProps {
  onConfirmation: () => void
  onCancel: () => void
}

const DeleteConfirmation = (props: DeleteConfirmationProps) => {
  const { onCancel, onConfirmation } = props

  const handleOnConfirmation = () => onConfirmation()
  const handleOnCancel = () => onCancel()

  return (
    <StyledDeleteConfirmationContainer>
      <SpanText variant="NUNITO_18_600_24">Delete Item?</SpanText>
      <SpanText variant="NUNITO_14_400_20" color="#5C6269">
        Are you sure you want to delete this item? This can not be undone.
      </SpanText>
      <StyledDeleteConfirmationButtonsContainer>
        <Button variant="secondary" onClick={handleOnCancel}>
          Cancel
        </Button>
        <Button onClick={handleOnConfirmation}>Delete</Button>
      </StyledDeleteConfirmationButtonsContainer>
    </StyledDeleteConfirmationContainer>
  )
}

export default DeleteConfirmation
