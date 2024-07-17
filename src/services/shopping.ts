import { AxiosResponse } from 'axios';
import API from '../utils/apiClient';

function getShoppingList<T>(): Promise<AxiosResponse<T, any>> {
  return API.get<T>('/item')
}

export {
  getShoppingList
}