import styled from "@emotion/styled";
import { NAV_BAR_HEIGHT } from "../utils/constants";

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${NAV_BAR_HEIGHT}px calc(100% - ${NAV_BAR_HEIGHT}px);
  position: relative;
  width: 100%;
  background-color: #F0F0F0;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: calc(100vh - ${NAV_BAR_HEIGHT}px);
  padding-top: 110px;
`