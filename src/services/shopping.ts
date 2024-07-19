import { AxiosResponse } from 'axios';
import API from '../utils/apiClient';
import { ShoppingItemPatchPayloadRequest, ShoppingItemPostPayloadRequest } from 'typings/services';

function getShoppingList<T>(): Promise<AxiosResponse<T, any>> {
  return API.get<T>('/item')
}

function postShoppingItem<T>(payload: ShoppingItemPostPayloadRequest): Promise<AxiosResponse<T, any>> {
  return API.post<T>('/item', payload)
}

function patchShoppingItem<T>(payload: ShoppingItemPatchPayloadRequest): Promise<AxiosResponse<T, any>> {
  return API.patch<T>(`/item/${payload._id}`, payload)
}

function deleteShoppingItemById<T>(id: string): Promise<AxiosResponse<T, any>> {
  return API.delete<T>(`/item/${id}`)
}

export {
  getShoppingList,
  postShoppingItem,
  patchShoppingItem,
  deleteShoppingItemById
}