import React, { useRef, useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation, useHistory, Link } from "react-router-dom";

import MovieCard from "./movie/MovieCard";

function Search(props) {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const q = params.get("q");
  const inputValue = useRef();

  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (q) {
      inputValue.current.focus();
      inputValue.current.value = q;
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=d8571643943516fba097bf4a6d13fa3c&language=en-US&query=${q}&page=1`
      )
        .then(response => response.json())
        .then(data => {
          setSearchResult(
            data.results.map(item => {
              return (
                <Col sm={6} className="mb-3" key={item.id}>
                  <MovieCard
                    id={item.id}
                    title={item.original_title}
                    detail={item.overview}
                    imgSrc={item.backdrop_path}
                    imdb={item.vote_average}
                  />
                </Col>
              );
            })
          );
        });
    } else {
      inputValue.current.focus();
    }
  }, [q]);

  function handleForm(event) {
    event.preventDefault();
    history.push(`/search?q=${inputValue.current.value}`);
  }
  return (
    <>
      <form onSubmit={handleForm}>
        <div className="form-group">
          <label htmlFor="search" className="text-white">
            {" "}
            Search a Movie
          </label>
          <input
            name="q"
            type="text"
            className="form-control"
            id="search"
            placeholder="Search a movie"
            ref={inputValue}
            onChange={e => {
              if (e.target.value == "") {
                history.push(`/movies`);
              } else {
                history.push(`/search?q=${e.target.value}`);
              }
            }}
          />
        </div>

        <div className="d-grid gap-2">
          <button
            type="submit"
            className="btn btn-primary btn-block mt-2"
            onClick={handleForm}
          >
            Search
          </button>
        </div>
      </form>
      <hr />
      <Row>{searchResult}</Row>
    </>
  );
}

export default Search;
