import { SurvivorPostPayloadRequest } from 'typings/services'

export interface AddFormProps {
  show: boolean
  title: string
  onClose: () => void
  onAdd: (payload: SurvivorPostPayloadRequest) => void
}
