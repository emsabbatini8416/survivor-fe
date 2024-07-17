
import { CardEmpty, Item, ItemList, Modal } from "components"
import { LayoutPage } from "../../layouts"
import { DeleteConfirmation } from "components/modal/delete-confirmation"
import React from "react"
import { useDeleteShoppingItem, useGetShoppingList } from "./shopping.utils"
import { ShoppingItem } from "typings/models"

const ShoppingPage = () => {
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = React.useState<boolean>(false)
  const [idToDelete, setIdToDelete] = React.useState<string>('')

  const { shoppingList, refetch, isLoading } = useGetShoppingList()
  const { onDelete } = useDeleteShoppingItem()
  const handleOnAdd = () => {}


  // DELETE HANDLERS
  const handleOnCloseDeleteConfirmationModal = () => {
    setIdToDelete('')
    setOpenDeleteConfirmation(false)
  }
  const handleOnOpenDeleteConfirmationModal = (id: string) => {
    setIdToDelete(id)
    setOpenDeleteConfirmation(true)
  }
  const handleOnDelete = (id: string) => {
    onDelete(id)
    setOpenDeleteConfirmation(false)
    refetch()
  }

  return(
    <LayoutPage>
      { isLoading && <div>Loading...</div> }
      { shoppingList.length === 0 
        ? <CardEmpty handleOnAdd={handleOnAdd} />
        : (
          <ItemList>
            {shoppingList.map((item: ShoppingItem) => (
              <Item 
                item={item} 
                onEdit={()=> {}} 
                onDelete={handleOnOpenDeleteConfirmationModal} 
              />
            ))}
          </ItemList>
        )
      }
      {openDeleteConfirmation && (
        <Modal onClose={handleOnCloseDeleteConfirmationModal}>
          <DeleteConfirmation 
            onCancel={handleOnCloseDeleteConfirmationModal} 
            onConfirmation={() => handleOnDelete(idToDelete)} 
          />
        </Modal>
      )}
    </LayoutPage>
  )
}

export default ShoppingPage