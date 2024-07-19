import { useCallback, useEffect, useState } from "react"
import { deleteShoppingItemById, getShoppingList, patchShoppingItem, postShoppingItem } from "services"
import type { ShoppingItemPatchPayloadRequest, ShoppingItemPostPayloadRequest } from "typings/services"

const useGetShoppingList = () => {
  const [list, setList] =  useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetch = useCallback(async() => {
    try {
      setIsLoading(true)
      const res = await getShoppingList<any>()
      setList(res.data.items)
    } catch {
      setList([])
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return {
    shoppingList: list,
    refetch: fetch,
    isLoading
  }
}

const usePostShoppingItem = () => {

  const onPost = (payload: ShoppingItemPostPayloadRequest) => {
    return postShoppingItem(payload)
  }

  return {
    onPost
  }
}

const usePatchShoppingItem = () => {

  const onPatch = (payload: ShoppingItemPatchPayloadRequest) => {
    return patchShoppingItem(payload)
  }

  return {
    onPatch
  }
}

const useDeleteShoppingItem = () => {

  const onDelete = (id: string) => {
    return deleteShoppingItemById(id)
  }
  
  return {
    onDelete
  }
}

export {
  useGetShoppingList,
  usePostShoppingItem,
  usePatchShoppingItem,
  useDeleteShoppingItem
}