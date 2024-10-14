import styled from '@emotion/styled'
import { NAV_BAR_HEIGHT, WRAPPER_WIDTH } from '../utils/constants'

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${NAV_BAR_HEIGHT}px calc(100% - ${NAV_BAR_HEIGHT}px);
  position: relative;
  width: 100%;
  background-color: #fafafa;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${WRAPPER_WIDTH}px;
  margin: 24px 0;
`

export const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`

export const StyledHeaderTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
