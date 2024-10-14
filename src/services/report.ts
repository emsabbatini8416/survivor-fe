import { AxiosResponse } from 'axios'
import API from '../utils/apiClient'

function getReport<T>(): Promise<AxiosResponse<T, any>> {
  return API.get<T>('/report')
}

export { getReport }
