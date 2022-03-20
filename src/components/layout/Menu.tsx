import * as React from 'react';
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { HouseFill,Robot,MotherboardFill,AwardFill } from 'react-bootstrap-icons';

export interface IMenuProps {
}

export default function Menu (props: IMenuProps) {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <LinkContainer to="/home" id="id_Home">
          <Nav.Link><HouseFill color='royalblue'/>&nbsp; Home</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/workex">
          <Nav.Link><Robot color='royalblue'/>&nbsp;Work Ex</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/tech">
          <Nav.Link><MotherboardFill color='royalblue'/>&nbsp;Technologies</Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/cert">
          <Nav.Link><AwardFill color='royalblue'/>&nbsp;Certifications</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}
