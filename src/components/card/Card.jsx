import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./Card.css";
import "../header/Header"



export default function Card(movie){

    const url = "https://image.tmdb.org/t/p/original"
    // console.log(movie.movie.id)


    return (
  
        
            <div className="cards">
                <img className="cards__img" 
                style={{maxWidth:"250px"}}
                src= {url+movie.movie.backdrop_path}
                alt = "Movie Poster" />
                <div className="cards__overlay">
                    <div className="card__title">{movie.movie.title}</div>
                    <div className="card__runtime">
                        {movie.movie.release_date}
                        <span className="card__rating">{movie.movie.vote_average} <i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie.movie.overview}</div>
                </div>
            </div>
        
    
    )
}
