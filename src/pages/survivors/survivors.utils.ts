import { useEffect, useState } from 'react'
import { getSurvivorList, postSurvivor } from 'services'
import type { Survivor } from 'typings/models'
import type {
  SurvivorListPayloadResponse,
  SurvivorPostPayloadRequest,
} from 'typings/services'
import type { ServerResponse } from 'typings/utils'

export const useGetSurvivors = () => {
  const [list, setList] = useState<Survivor[]>([])

  useEffect(() => {
    async function init() {
      try {
        const { data } =
          await getSurvivorList<ServerResponse<SurvivorListPayloadResponse>>()
        if (data.success) setList(data.data.items)
      } catch (err) {
        console.log(err)
      }
    }
    init()
  }, [])

  return {
    listSurvivors: list,
  }
}

export const PAYLOAD_INITIAL_VALUE: SurvivorPostPayloadRequest = {
  name: '',
  infected: null,
}

export const usePostSurvivor = () => {
  const [showAddModal, setShowAddModal] = useState<boolean>(false)

  const [payload, setPayload] = useState(PAYLOAD_INITIAL_VALUE)

  const addSurvivor = (payload: SurvivorPostPayloadRequest) => {
    return postSurvivor(payload)
  }

  const handleOnClose = () => setShowAddModal(false)
  const handleOnOpen = () => setShowAddModal(true)

  return {
    showAddModal,
    handleOnOpen,
    handleOnClose,
    payload,
    setPayload,
    addSurvivor,
  }
}
