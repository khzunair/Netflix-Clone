import React, { useState, useEffect } from 'react';
import axios from '../axios'

const baseurl = 'https://image.tmdb.org/t/p/original/'

const Row = ({title, fetchUrl, }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    async function fetchData(){
      const request = await axios.get(fetchUrl);
          setMovies (request.data.results);
          // console.log(movies);
          return request;
  
    }
    fetchData();
    // if [], run once when the row loads, and don't run again

  }, [fetchUrl]);

  return (
    <div className='row'>
      <h2>{title}</h2>
        <div className='row-posters'>
          {movies.map(movie => (
            <img className="image"
             src={`${baseurl}${movie.poster_path}`} 
             alt='...' />
         ) )}
        </div>
    </div>
  );
}

export default Row;
