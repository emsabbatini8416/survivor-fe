import { HeaderPage, WrapperPage } from 'layouts'
import { AddForm, Table, TBody, Td, Th, THead, Tr } from './components'
import { Avatar, Button, Chip, SpanText } from 'components'
import { useGetSurvivors, usePostSurvivor } from './survivors.utils'
import { Survivor } from 'typings/models'
import { format } from 'date-fns'
import { TableNameCell } from './styles'
import type { SurvivorPostPayloadRequest } from 'typings/services'

const Survivors = () => {
  const { listSurvivors } = useGetSurvivors()
  const { showAddModal, handleOnOpen, handleOnClose, addSurvivor } =
    usePostSurvivor()

  const onAdd = async (payload: SurvivorPostPayloadRequest) => {
    try {
      await addSurvivor(payload)
    } catch (err) {
      console.log(err)
    } finally {
      handleOnClose()
    }
  }
  return (
    <>
      <WrapperPage>
        <HeaderPage
          title="List of Survivors"
          subtitle={`You have 0 healthy survivors`}
          rightSideComponent={
            <Button variant="secondary" onClick={handleOnOpen}>
              Add Survivor
            </Button>
          }
        />
        <Table>
          <THead>
            <Tr>
              <Th>
                <SpanText variant="INTER_500_12_18" color="#A1A0A3">
                  Name
                </SpanText>
              </Th>
              <Th>
                <SpanText variant="INTER_500_12_18" color="#A1A0A3">
                  Status
                </SpanText>
              </Th>
              <Th>
                <SpanText variant="INTER_500_12_18" color="#A1A0A3">
                  Date Added
                </SpanText>
              </Th>
            </Tr>
          </THead>
          <TBody>
            {listSurvivors.length > 0
              ? listSurvivors.map((survivor: Survivor) => (
                  <Tr key={survivor._id}>
                    <Td>
                      <TableNameCell>
                        <Avatar />
                        <SpanText variant="INTER_600_14_20" color="#312244">
                          {survivor.name}
                        </SpanText>
                      </TableNameCell>
                    </Td>
                    <Td>
                      <Chip
                        label={survivor.infected ? 'Infected' : 'Healthy'}
                        color={survivor.infected ? 'red' : 'green'}
                      />
                    </Td>
                    <Td>
                      {format(new Date(survivor.createdAt), 'MMM Mo, yyyy')}
                    </Td>
                  </Tr>
                ))
              : null}
          </TBody>
        </Table>
      </WrapperPage>
      <AddForm
        show={showAddModal}
        title="Add Survivor"
        onClose={handleOnClose}
        onAdd={onAdd}
      />
    </>
  )
}

export default Survivors
