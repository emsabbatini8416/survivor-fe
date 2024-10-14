import styled from '@emotion/styled'

export const StyledCardContainer = styled.div`
  width: 377px;
  height: 194px;
  border-radius: 10px;
  border: 1px solid #efefef;
`

export const StyledCardBody = styled.div`
  height: calc(100% - 42px);
  padding: 16px 12px 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const StyledCardBodyValue = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const StyledCardFooter = styled.div`
  width: 100%;
  height: 42px;
  border-top: 1px solid #e6e6e6;
  padding: 12px 20px;
  display: flex;
  align-items: center;
`
