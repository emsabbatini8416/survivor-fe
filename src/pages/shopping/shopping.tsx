
import { CardEmpty, Item, ItemList, Modal } from "components"
import { LayoutPage } from "../../layouts"
import { DeleteConfirmation } from "components/modal/delete-confirmation"
import React from "react"
import { useGetShoppingList } from "./shopping.utils"

const ShoppingPage = () => {
  const [openDeleteConfirmation, setOpenDeleteConfirmation] = React.useState<boolean>(false)
  
  const { shoppingList } = useGetShoppingList()

  const handleOnAdd = () => {}


  // DELETE HANDLERS
  const handleOnCloseDeleteConfirmationModal = () => setOpenDeleteConfirmation(false)
  const handleOnDelete = () => {}

  return(
    <LayoutPage>
      { shoppingList.length === 0 
        ? <CardEmpty handleOnAdd={handleOnAdd} />
        : (
          <ItemList>
            {shoppingList.map(() => (
              <Item title="Tomatoes" description="Green cherry tomatoes" />
            ))}
          </ItemList>
        )
      }
      {openDeleteConfirmation && (
        <Modal onClose={handleOnCloseDeleteConfirmationModal}>
          <DeleteConfirmation 
            onCancel={handleOnCloseDeleteConfirmationModal} 
            onConfirmation={handleOnDelete} 
          />
        </Modal>
      )}
    </LayoutPage>
  )
}

export default ShoppingPage