import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
function Contact(props) {
  return (
    <>
      <Container>
        <h1 className="text-center mt-3 mb-3">Contact</h1>
        <Row className="mb-3">
          <Col sm={6} className="bg-secondary rounded text-center pb-5 pt-5">
            <h2 className="mt-5">Contact us on </h2>
            <h2 className="mt-5">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/furkankarakuzu/"
                target="_blank"
              >
                <i class="fab fa-linkedin mr-2" />
                Linkedin
              </a>
            </h2>
            <br />
            <h2>
              <a
                className="nav-link"
                href="https://github.com/furkankarakuzu"
                target="_blank"
              >
                <i class="fab fa-github-square" /> Github
              </a>
            </h2>
            <br />
            <h2>
              <a
                className="nav-link"
                href="https://twitter.com/furkannjs"
                target="_blank"
              >
                <i class="fab fa-twitter-square mr-2" />
                Twitter
              </a>
            </h2>
          </Col>
          <Col sm={6} className="text-white mt-3">
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Tell us your name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Tell us your surname</Form.Label>
                  <Form.Control type="text" placeholder="Enter surname" />
                </Form.Group>
              </Form.Row>

              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Tell us your phone number</Form.Label>
                <Form.Control type="text" placeholder="Enter phone number" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="Enter subject" />
              </Form.Group>

              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Write us a message"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="float-right">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
