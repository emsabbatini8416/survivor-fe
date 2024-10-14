import { AxiosResponse } from 'axios'
import API from '../utils/apiClient'
import type { SurvivorPostPayloadRequest } from 'typings/services'

function getSurvivorList<T>(): Promise<AxiosResponse<T, any>> {
  return API.get<T>('/survivor')
}

function postSurvivor<T>(
  payload: SurvivorPostPayloadRequest,
): Promise<AxiosResponse<T, any>> {
  return API.post<T>('/survivor', payload)
}

function patchSurvivor<T>(payload: any): Promise<AxiosResponse<T, any>> {
  return API.patch<T>(`/survivor/${payload._id}`, payload)
}

export { getSurvivorList, postSurvivor, patchSurvivor }
