import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"


class Header extends Component {
  state = {
    isOpen: false
  }

  handleToogle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    return (
      <div className="header">
        <Navbar
          color="light" 
          light
          expand="md"
        >
          <NavbarBrand href="/">Marvel Series</NavbarBrand>
          <NavbarToggler onClick={this.handleToogle} />
          <Collapse
            isOpen={this.state.isOpen}
            navbar
          >
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
}

export default Header
