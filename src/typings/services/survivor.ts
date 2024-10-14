import type { Survivor } from 'typings/models'

export interface SurvivorListPayloadResponse {
  items: Survivor[]
  success: boolean
}

export interface SurvivorPostPayloadRequest
  extends Pick<Survivor, 'name' | 'infected'> {}
