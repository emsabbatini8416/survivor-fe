import { SpanText } from 'components'
import {
  StyledLogo,
  StyledNav,
  StyledNavBarContainer,
  StyledNavBarWrapper,
  StyledNavLi,
  StyledNavLink,
  StyledNavUl,
} from './styles'
import Logo from 'assets/images/logo.svg'
import { Routes } from 'router'
import { useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  const { pathname } = location
  return (
    <StyledNavBarContainer>
      <StyledNavBarWrapper>
        <StyledLogo src={Logo} width={35} height={35} alt="Logo" />
        <SpanText variant="INTER_500_16_44" color="white">
          Survival Next
        </SpanText>
        <StyledNav>
          <StyledNavUl>
            <StyledNavLi>
              <StyledNavLink
                to={Routes.ROOT}
                isSelected={pathname === Routes.ROOT}
              >
                Dashboard
              </StyledNavLink>
            </StyledNavLi>
            <StyledNavLi>
              <StyledNavLink
                to={Routes.SURVIVOR}
                isSelected={pathname === Routes.SURVIVOR}
              >
                Survivors
              </StyledNavLink>
            </StyledNavLi>
            <StyledNavLi>
              <StyledNavLink
                to={Routes.ITEMS}
                isSelected={pathname === Routes.ITEMS}
              >
                Inventory
              </StyledNavLink>
            </StyledNavLi>
          </StyledNavUl>
        </StyledNav>
      </StyledNavBarWrapper>
    </StyledNavBarContainer>
  )
}

export default NavBar
