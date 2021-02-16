import React from "react";
import "../../style.css";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function MovieCard(props) {
  return (
    <Card>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.imgSrc}`}
        className="card-img-top"
        alt="..."
      />
      <Card.Body>
        <Row>
          <Col xs={6}>
            <b>{props.title}</b>
          </Col>
          <Col>
            <span className="text-dark float-right">
              <b>IMDB Rating : {props.imdb}</b>
            </span>
          </Col>
        </Row>

        <p className="card-text detail text-dark mt-3 satir">{props.detail}</p>
        <Link className="btn btn-primary" to={`/movie/${props.id}`}>
          Details..
        </Link>
      </Card.Body>
    </Card>
  );
}
