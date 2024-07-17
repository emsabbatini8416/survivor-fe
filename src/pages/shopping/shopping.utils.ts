import { useEffect, useState } from "react"
import { getShoppingList } from "services"

const useGetShoppingList = () => {
  const [list, setList] =  useState<any[]>([])

  useEffect(() => {
    async function init(){
      const res = await getShoppingList<any>()
      setList(res.data.items)
    }
    init()
  }, [])

  return {
    shoppingList: list
  }

}

export {
  useGetShoppingList
}