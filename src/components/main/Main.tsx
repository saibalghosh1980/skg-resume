import * as React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Menu from "../layout/Menu";
import Home from "../pages/Home";
import WorkEx from "../pages/wokex/WorkEx";
import Tech from "../pages/tech/Tech";
import { Redirect, Route, Switch } from "react-router-dom";

export interface IMainProps {}

export default function Main(props: IMainProps) {
  return (
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12}>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={12} lg={12} xl={12} className="bg-light">
          <Menu />
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
            <Switch>
              <Route path="/" exact>
                <Redirect to="/home" />
              </Route>
              <Route path="/home" exact>
                <Home />
              </Route>
              <Route path="/workex" exact>
                <WorkEx />
              </Route>
              <Route path="/tech" exact>
                <Tech />
              </Route>
            </Switch>
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
          <Footer />
        </Col>
      </Row>
    </Container>
  );
}
