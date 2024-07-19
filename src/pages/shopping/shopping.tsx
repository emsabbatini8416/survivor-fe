import { AddOrEditForm, CardEmpty, Item, ItemList, Modal } from 'components'
import { LayoutPage } from '../../layouts'
import { DeleteConfirmation } from 'components/modal/delete-confirmation'
import React from 'react'
import {
  useDeleteShoppingItem,
  useGetShoppingList,
  usePatchShoppingItem,
  usePostShoppingItem,
} from './shopping.utils'
import { ShoppingItem } from 'typings/models'
import { CircularProgress, Drawer } from '@mui/material'
import {
  ShoppingItemPatchPayloadRequest,
  ShoppingItemPostPayloadRequest,
} from 'typings/services'

const ShoppingPage = () => {
  const [openAddOrEdit, setOpenAddOrEdit] = React.useState<boolean>(false)
  const [openDeleteConfirmation, setOpenDeleteConfirmation] =
    React.useState<boolean>(false)
  const [idToDelete, setIdToDelete] = React.useState<string>('')
  const [itemToEdit, setItemToEdit] = React.useState<ShoppingItem>(null)

  const { shoppingList, refetch, isLoading } = useGetShoppingList()
  const { onPost } = usePostShoppingItem()
  const { onPatch } = usePatchShoppingItem()
  const { onDelete } = useDeleteShoppingItem()

  // ADD OR EDIT HANDLERS
  const handleOnAddDrawer = () => {
    setOpenAddOrEdit(true)
  }
  const handleOnCloseDrawer = () => {
    setItemToEdit(null)
    setOpenAddOrEdit(false)
  }

  const handleOnSelectToEdit = (item: ShoppingItem) => {
    setItemToEdit(item)
    setOpenAddOrEdit(true)
  }

  const handleOnSave = async (
    isEdit: boolean,
    payload: ShoppingItemPostPayloadRequest | ShoppingItemPatchPayloadRequest,
  ) => {
    if (!isEdit) await onPost(payload as ShoppingItemPostPayloadRequest)
    else await onPatch(payload as ShoppingItemPatchPayloadRequest)

    setItemToEdit(null)
    setOpenAddOrEdit(false)
    refetch()
  }

  // DELETE HANDLERS
  const handleOnCloseDeleteConfirmationModal = () => {
    setIdToDelete('')
    setOpenDeleteConfirmation(false)
  }
  const handleOnOpenDeleteConfirmationModal = (id: string) => {
    setIdToDelete(id)
    setOpenDeleteConfirmation(true)
  }
  const handleOnDelete = async (id: string) => {
    await onDelete(id)
    setOpenDeleteConfirmation(false)
    refetch()
  }

  return (
    <LayoutPage>
      {isLoading && <CircularProgress />}
      {shoppingList.length === 0 ? (
        <CardEmpty onAdd={handleOnAddDrawer} />
      ) : (
        <ItemList onAdd={handleOnAddDrawer}>
          {shoppingList.map((item: ShoppingItem) => (
            <Item
              key={item._id}
              item={item}
              onEdit={handleOnSelectToEdit}
              onDelete={handleOnOpenDeleteConfirmationModal}
            />
          ))}
        </ItemList>
      )}
      <Drawer open={openAddOrEdit} anchor="right" onClose={handleOnCloseDrawer}>
        <AddOrEditForm
          item={itemToEdit}
          onClose={handleOnCloseDrawer}
          onSave={handleOnSave}
        />
      </Drawer>
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
