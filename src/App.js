import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import links from "./data/links";

export default function App() {
  const routeMaps = links.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <BrowserRouter>
      <NavBar links={links} />
      <Container>
        <Row>
          <Col>
            <Switch>{routeMaps}</Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}
