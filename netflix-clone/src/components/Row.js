import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../components/Row.css" 

const baseurl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
    // if [], run once when the row loads, and don't run again
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2 className="BColor">{title}</h2>
      <div className={`row-posters ${isLargeRow && `row-posterLarge`}`}>
        {movies.map((movie) => (
          <img
          key={movie.id}
            className="row-poster"
            // There are two diffent photos one is poster and one is backdrop
            src={`${baseurl}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.id}

          />
        ))}
      </div>
    </div>
  );
};

export default Row;
