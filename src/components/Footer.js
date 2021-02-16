import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="p-3 bg-light text-center">
      <Container>
        <Row>
          <Col sm={6}>
            <a
              className="stretched-link"
              href="https://www.kodluyoruz.org"
              target="_blank"
            >
              Kodluyoruz
            </a>
          </Col>
          <Col sm={6}>
            <p>
              <a
                className="stretched-link"
                href="https://github.com/furkankarakuzu"
                target="_blank"
              >
                Furkan Karakuzu
              </a>
            </p>
          </Col>
        </Row>
        <Link to="/">MovieBox</Link>
      </Container>
    </footer>
  );
}
