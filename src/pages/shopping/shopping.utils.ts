import { useCallback, useEffect, useState } from "react"
import { deleteShoppingItemById, getShoppingList } from "services"

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

const useDeleteShoppingItem = () => {

  const onDelete = async(id: string) => {
    return await deleteShoppingItemById(id)
  }
  
  return {
    onDelete
  }
}

export {
  useGetShoppingList,
  useDeleteShoppingItem
}