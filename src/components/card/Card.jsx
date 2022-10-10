import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";


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
  <div className="cards">
      <img
        className="cards__img"
        style={{ maxWidth: "250px" }}
        src={url + movie.movie.backdrop_path}
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
        <div className="card__description">{movie.movie.overview}</div>
      </div>
    </div>
    }
    
    
    
  </>;

  }