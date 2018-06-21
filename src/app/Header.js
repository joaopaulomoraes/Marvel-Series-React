import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"


const Header = () => {
  return (
    <div className="header">
      <Navbar
        color="light" 
        light
        expand="md"
      >
        <NavbarBrand href="/">Marvel Series</NavbarBrand>
        <NavbarToggler />
        <Collapse navbar>
          <Nav
            className="ml-auto"
            navbar
          >
            <NavItem>
              <NavLink href="/series">
                Series
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
