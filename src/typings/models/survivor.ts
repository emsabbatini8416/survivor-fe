import type { Item } from './item'

interface InventoryItem {
  itemId: Item['_id']
  quantity: number
}

export interface Survivor {
  _id: string
  name: string
  age: number
  gender: string
  lastLocation: number[]
  inventory: InventoryItem[]
  infected: boolean
  createdAt: string
}
