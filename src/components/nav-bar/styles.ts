import styled from '@emotion/styled'
import { Link, LinkProps } from 'react-router-dom'
import { WRAPPER_WIDTH } from 'utils/constants'

export const StyledNavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #3e1f47;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  height: 64px;
  z-index: 101;
`

export const StyledNavBarWrapper = styled.div`
  width: 100%;
  max-width: ${WRAPPER_WIDTH}px;
  display: flex;
  align-items: center;
`
export const StyledLogo = styled.img`
  margin-right: 14px;
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`

export const StyledNavUl = styled.ul`
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-between;
`

export const StyledNavLi = styled.li`
  margin-right: 40px;
  list-style: none;
  text-decoration: none;
  display: inline;
`

interface StyledNavLinkProps extends LinkProps {
  isSelected?: boolean
}

export const StyledNavLink = styled(Link)<StyledNavLinkProps>`
  color: white;
  border-radius: 4px;
  padding: 12px 18px;
  text-decoration: none;

  ${({ isSelected }) =>
    isSelected &&
    `
    background-color: #1F0D24;
    `}
`
