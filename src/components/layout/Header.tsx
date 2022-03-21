import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import reacticon from "../../images/react.gif";
import skgicon from "../../images/skg.jpeg";
import Image from "react-bootstrap/Image";

export interface IHeaderProps {}

export default function Header(props: IHeaderProps) {
  return (
    <Container className="bg-dark text-white" fluid>
      <Row>
        <Col xs={3} className="text-left">
          <Image src={skgicon} height="180" width="180" roundedCircle />
        </Col>
        <Col className="text-center">
          <br />
          <br />
          <br />
          <h4 style={{
            fontFamily: "fantasy",
          }}>Saibal K. Ghosh</h4>
          <br />
          <br />
          <br />
        </Col>
        <Col xs={3} className="text-left">
          &nbsp;
        </Col>
      </Row>
    </Container>
  );
}
