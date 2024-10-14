import { Button, Icon, Input, Modal, Select, SpanText } from 'components'
import {
  StyledContainer,
  StyledForm,
  StyledHeader,
  StyledHeaderClose,
  StylesButtons,
} from './styles'
import type { AddFormProps } from 'typings/components'
import type { SelectOptionProps } from 'components/UI/select/select'
import { useState } from 'react'
import { SurvivorPostPayloadRequest } from 'typings/services'
import { PAYLOAD_INITIAL_VALUE } from 'pages/survivors/survivors.utils'

const OPTIONS: SelectOptionProps[] = [
  { value: 1, name: 'Infected' },
  { value: 0, name: 'Non Infected' },
]

const AddForm = (props: AddFormProps) => {
  const { show, title, onClose, onAdd } = props
  const [payload, setPayload] = useState<SurvivorPostPayloadRequest>(
    PAYLOAD_INITIAL_VALUE,
  )

  const handleOnAdd = () => {
    onAdd(payload)
    setPayload(PAYLOAD_INITIAL_VALUE)
  }

  const handleOnChange = (e: any) => {
    const { name, value } = e.target
    debugger
    setPayload((prev) => ({
      ...prev,
      [name]: name === 'infected' ? (value ? 1 : 0) : value,
    }))
  }

  if (!show) return null

  return (
    <Modal onClose={onClose}>
      <StyledContainer>
        <StyledHeader>
          <SpanText variant="INTER_600_18_24">{title}</SpanText>
          <StyledHeaderClose onClick={onClose}>
            <Icon name="Close" color="#000000" />
          </StyledHeaderClose>
        </StyledHeader>
        <StyledForm>
          <Input
            name="name"
            label="Full Name of Survivor"
            type="text"
            placeholder="Full Name"
            value={payload.name}
            onChange={handleOnChange}
          />
          <Select
            name="infected"
            label="Status"
            items={OPTIONS}
            value={payload.infected}
            onChange={handleOnChange}
          />
          <StylesButtons>
            <Button type="button" variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button type="button" variant="primary" onClick={handleOnAdd}>
              Add Survivor
            </Button>
          </StylesButtons>
        </StyledForm>
      </StyledContainer>
    </Modal>
  )
}

export default AddForm
