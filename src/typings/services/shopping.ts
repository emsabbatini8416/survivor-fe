import type { ShoppingItem } from "typings/models"

export interface ShoppingItemPostPayloadRequest {
  name: string,
  description: string,
  quantity: number
}

export interface ShoppingItemPatchPayloadRequest extends ShoppingItemPostPayloadRequest {
  _id: ShoppingItem['_id']
  purchased: boolean
}