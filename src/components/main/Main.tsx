import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
          <h1>Menubar</h1>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col className="bg-light">
          <div>
            <h1>Content</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
          &nbsp;
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-dark">
          <Footer/>
        </Col>
      </Row>
    </Container>
  );
}
