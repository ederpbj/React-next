import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
  

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Para dispositivos moveis, toggle
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Site React-next</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/sobre">Sobre Empresa</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/contato">Contato</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Menu;