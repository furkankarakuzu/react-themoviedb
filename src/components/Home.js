import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
function Home(props) {
  return (
    <Container className="mt-5 mb-5">
      <Jumbotron className="bg-secondary border rounded">
        <Container>
          <Row>
            <Col sm={8}>
              <h1 className="display-3 text-dark">Hello, React!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                <Link
                  className="btn btn-primary btn-lg"
                  to="/movies"
                  role="button"
                >
                  See details..
                </Link>
              </p>
            </Col>
            <Col className="bg-dark p-5 rounded">
              <h2 className="m-5 text-white pt-2">MovieBox</h2>
            </Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col md={4}>
            <h2>Title 1</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                See details
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h2>Title 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                See details
              </a>
            </p>
          </Col>
          <Col md={4}>
            <h2>Title 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                See details
              </a>
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="marketing">
        <hr className="featurette-divider" />

        <Row className="featurette">
          <Col md={7}>
            <h2 className="featurette-heading">
              First
              <span className="text-muted"> Title</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
          <Col md={5}>
            <img
              className="featurette-image img-fluid mx-auto"
              alt="..."
              src="https://miro.medium.com/max/3000/1*MI686k5sDQrISBM6L8pf5A.jpeg"
              data-holder-rendered="true"
            />
          </Col>
        </Row>

        <hr className="featurette-divider" />

        <Row className="featurette">
          <Col md={7} className="order-md-2">
            <h2 className="featurette-heading">
              Second
              <span className="text-muted"> Title</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
          <Col md={5} className="order-md-1">
            <img
              className="featurette-image img-fluid mx-auto"
              alt="..."
              src="https://www.olympus-imaging.co.in/content/000101300.jpg"
            />
          </Col>
        </Row>

        <hr className="featurette-divider" />

        <Row className="featurette">
          <Col md={7}>
            <h2 className="featurette-heading">
              Third
              <span className="text-muted"> Title</span>
            </h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </Col>
          <Col md={5}>
            <img
              className="featurette-image img-fluid mx-auto"
              alt="..."
              src="https://fujifilm-x.com/wp-content/uploads/2019/08/x-t3_sample-images02.jpg"
            />
          </Col>
        </Row>
        <hr className="featurette-divider" />
        <Row className="mt-5">
          <Col lg={4}>
            <img
              className="rounded-circle"
              src="https://avatars.githubusercontent.com/u/46384767?s=460&u=0e205315394e5a8ce190bf311af0852c4ebd0d53&v=4"
              alt="..."
              width="140"
              height="140"
            />
            <h2 className="text-muted">Furkan Karakuzu</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                See details
              </a>
            </p>
          </Col>
          <Col lg={4}>
            <img
              className="rounded-circle"
              src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
              alt="..."
              width="140"
              height="140"
            />
            <h2 className="text-muted">Bella Rise</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                See details
              </a>
            </p>
          </Col>
          <div className="col-lg-4">
            <img
              className="rounded-circle"
              src="https://lh3.googleusercontent.com/proxy/omlEDPZrlhfmn2Ofyz_2QVvvp0LL-JkkewwjBxk0090FmHm7quIsnN5bz7vgOPn6d_2qchgGZfvKM1Oat0lGDL-T5uRLzUR3O7EivnPqU45Bm5ZzXJu4j6HG1jVtPss"
              alt="..."
              width="140"
              height="140"
            />
            <h2 className="text-muted">John Doe</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              <a className="btn btn-primary" href="#" role="button">
                See details
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
