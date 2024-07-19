import { Button, Input, Select, SpanText } from 'components'
import {
  StyledAddOrEditFormBody,
  StyledAddOrEditFormContainer,
  StyledAddOrEditFormFooter,
  StyledAddOrEditFormHeader,
} from './styles'
import { SelectOptionProps } from 'components/UI/select/select'
import { Checkbox, FormControlLabel, SelectChangeEvent } from '@mui/material'

import type { ShoppingItem } from 'typings/models'
import type {
  ShoppingItemPostPayloadRequest,
  ShoppingItemPatchPayloadRequest,
} from 'typings/services'
import { useEffect, useState } from 'react'

interface FormProps extends ShoppingItem {}

const OPTIONS: SelectOptionProps[] = [
  { value: 1, name: '1' },
  { value: 2, name: '2' },
  { value: 3, name: '3' },
  { value: 4, name: '4' },
  { value: 5, name: '5' },
]

const INITIAL_FORM: FormProps = {
  _id: '',
  name: '',
  description: '',
  quantity: null,
  purchased: false,
}

export interface AddOrEditFormProps {
  item?: ShoppingItem
  onClose: () => void
  onSave: (
    isEdit: boolean,
    item: ShoppingItemPostPayloadRequest | ShoppingItemPatchPayloadRequest,
  ) => void
}

const AddOrEditForm = (props: AddOrEditFormProps) => {
  const { item, onClose, onSave } = props

  const [form, setForm] = useState<FormProps>(INITIAL_FORM)

  const actionLabel = !item ? 'Add' : 'Edit'

  const handleOnSave = () => {
    if (!item) {
      onSave(false, {
        name: form.name,
        description: form.description,
        quantity: form.quantity,
      } as ShoppingItemPostPayloadRequest)
    } else onSave(true, { ...form } as ShoppingItemPatchPayloadRequest)
  }

  useEffect(() => {
    if (item) {
      setForm({ ...INITIAL_FORM, ...item })
    }
  }, [item])

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleOnChangeSelect = (e: SelectChangeEvent<unknown>) => {
    const { value } = e.target
    setForm((prev) => ({ ...prev, quantity: value as number }))
  }

  const handleOnChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: checked }))
  }

  return (
    <StyledAddOrEditFormContainer>
      <StyledAddOrEditFormHeader>
        <SpanText variant="DOSIS_18_600_22" color="#5C6269">
          SHOPPING LIST
        </SpanText>
      </StyledAddOrEditFormHeader>
      <StyledAddOrEditFormBody>
        <SpanText
          variant="NUNITO_18_400_24"
          color="#2A323C"
        >{`${actionLabel} an Item`}</SpanText>
        <SpanText
          variant="NUNITO_18_400_24"
          color="#5C6269"
        >{`${actionLabel} your new item below`}</SpanText>
        <Input
          type="text"
          name="name"
          value={form.name}
          placeholder="Item Name"
          onChange={handleOnChange}
        />
        <Input
          type="text"
          name="description"
          isTextArea
          value={form.description}
          placeholder="Description"
          onChange={handleOnChange}
        />
        <Select
          items={OPTIONS}
          name="quantity"
          value={form.quantity}
          onChange={handleOnChangeSelect}
        />
        {item && (
          <FormControlLabel
            control={
              <Checkbox
                name="purchased"
                checked={form.purchased}
                onChange={handleOnChangeCheckbox}
              />
            }
            label="Purchased ?"
          />
        )}
      </StyledAddOrEditFormBody>
      <StyledAddOrEditFormFooter>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button
          onClick={handleOnSave}
        >{`${!item ? 'Add Task' : 'Save Item'}`}</Button>
      </StyledAddOrEditFormFooter>
    </StyledAddOrEditFormContainer>
  )
}

export default AddOrEditForm
