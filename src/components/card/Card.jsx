import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import { Link } from "react-router-dom";


export default function Card(movie) {
  const url = "https://image.tmdb.org/t/p/original";
  // console.log(movie.movie.id)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return <>
    {isLoading
    ?
    <div className="cards">
    <SkeletonTheme color="#444" highlightColor="#444" >
        <Skeleton height={300} duration={2} />
    </SkeletonTheme>
</div>
  :
  <Link to={`/movie/${movie.movie.id}`} style={{textDecoration:"none", color:"white"}}>
  <div className="cards">
      <img
        className="cards__img"
        style={{ maxWidth: "250px" }}
        src={url + movie.movie.backdrop_path}
        onError={(e)=>{e.target.onerror = null; e.target.src="https://img.freepik.com/free-vector/cinema-film-festival-movie-poster-background_1017-33461.jpg?w=2000"}}
        alt="Movie Poster"
      />
      <div className="cards__overlay">
        <div className="card__title">{movie.movie.title}</div>
        <div className="card__runtime">
          {movie.movie.release_date}
          <span className="card__rating">
            {movie.movie.vote_average} <i className="fas fa-star" />
          </span>
        </div>
        <div className="card__description">{movie.movie.overview.slice(0,150)+"..."}</div>
      </div>
    </div>
    </Link>
    }
    
    
    
  </>;

  }