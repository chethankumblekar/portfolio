import { NavLink, Link } from 'react-router-dom'
import {
  Name,
  NavMenuItem,
  NavMenuWrapper,
  NavTitleWrapper,
  Role,
  Separator,
  StyledNavbarDesktop
} from '../../styles/Navbar.style'
import { GeometricShape } from '../../styles/Containers.style'

const NavbarDesktop = () => {
  return (
    <>
      <StyledNavbarDesktop>
        <NavTitleWrapper>
          <GeometricShape />
          <div>
            <Link to="/">
              <Name>Chethan K</Name>
            </Link>
            <Separator>/</Separator>
            <Role>software developer</Role>
          </div>
        </NavTitleWrapper>
        <div>
          <NavMenuWrapper>
            <NavLink to="/">
              <NavMenuItem>about me</NavMenuItem>
            </NavLink>
            <NavLink to="/experience">
              <NavMenuItem>experience</NavMenuItem>
            </NavLink>
            <NavLink to="/projects">
              <NavMenuItem>projects</NavMenuItem>
            </NavLink>
            <NavLink to="/contact">
              <NavMenuItem>contact</NavMenuItem>
            </NavLink>
          </NavMenuWrapper>
        </div>
      </StyledNavbarDesktop>
    </>
  )
}

export default NavbarDesktop
