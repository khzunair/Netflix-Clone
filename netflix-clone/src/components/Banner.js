import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../request';
import "./Banner.css"

const Banner = () => {
    const [movie, setMovie] = useState([]);


    useEffect(()=>{
        async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        
        setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]); 
            return request;
        }
        fetchData();
    }, []); 
    console.log(movie);

  return (
    <header className='banner'
    style={{
        backgroundSize: "cover",
        backgroundPosition:"center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`
    }}
    >
        <div className='bannerContents '>
                <h1 className='bannerTitle'>
            {movie?.title || movie?.name || movie?.original_name}
                </h1>
            <div banner_buttons>
            <button className='bannerButtons'>Play</button>
            <button className='bannerButtons'>Add to My List</button>
            </div>
            <h1 className='bannerDescription'>{movie?.overview}</h1>
        
        </div>
        <div className='banner-fade-effect'>
            {/* This is empty div for gradient  */}
        </div>

    </header>
  );
}

export default Banner;
