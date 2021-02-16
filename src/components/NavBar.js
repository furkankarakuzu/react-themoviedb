import React from "react";
import { Nav, Navbar, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const linkItems = props.links
    .filter(item => item.isLink)
    .map((item, index) => (
      <li className="text-bold" key={index}>
        <Link to={item.link} className="nav-link font-weight-bold">
          {item.title}
        </Link>
      </li>
    ));
  return (
    <>
      <Navbar bg="light" expand="lg" className="pt-lg-3">
        <Link to="/" className="navbar-brand">
          MovieBox
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ml-auto">
            <ul className="navbar-nav">{linkItems}</ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
