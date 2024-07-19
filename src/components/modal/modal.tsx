import {
  StyledModalBackdrop,
  StyledModalContainer,
  StyledModalContent,
} from './styles'

export interface ModalProps {
  onClose: () => void
}

const Modal = (props: React.PropsWithChildren<ModalProps>) => {
  const { children, onClose } = props

  return (
    <StyledModalContainer>
      <StyledModalBackdrop onClick={onClose} />
      <StyledModalContent>{children}</StyledModalContent>
    </StyledModalContainer>
  )
}

export default Modal
