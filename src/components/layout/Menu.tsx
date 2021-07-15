import * as React from 'react';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

export interface IMenuProps {
}

export default function Menu (props: IMenuProps) {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to="/home" id="id_Home">
          <Nav.Link>Home</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/workex">
          <Nav.Link>Work Ex</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/tech">
          <Nav.Link>Technologies</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}
