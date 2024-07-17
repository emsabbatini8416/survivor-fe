import { AxiosResponse } from 'axios';
import API from '../utils/apiClient';

function getShoppingList<T>(): Promise<AxiosResponse<T, any>> {
  return API.get<T>('/item')
}

function deleteShoppingItemById<T>(id: string): Promise<AxiosResponse<T, any>> {
  return API.delete<T>(`/item/${id}`)
}

export {
  getShoppingList,
  deleteShoppingItemById
}