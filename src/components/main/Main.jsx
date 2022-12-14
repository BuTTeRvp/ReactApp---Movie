import React, { useEffect, useState } from "react";
import "./Main.css";
import Card from "../card/Card";
import { Link } from "react-router-dom";

export default function Main() {
  const [pageNumber, setPageNumber] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");
  const[rating, setRating] = useState("");

  useEffect(() => {
    const getMovieList = async ()=>{
      search
      ?
      await fetch(`https://movie-task.vercel.app/api/search?page=${pageNumber}&query=${search}`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.data.results))
      :
      await fetch(`https://movie-task.vercel.app/api/popular?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.data.results));
    }
    getMovieList();

  }, [pageNumber, rating, search]);


  function handelSearch(e) {
    console.log("handelSearch Called!")
    e.preventDefault();
   fetch(`https://movie-task.vercel.app/api/search?page=${pageNumber}&query=${search}`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.data.results));
      
  }


  function handelFilter(e){
    e.preventDefault();
    console.log(rating)
    // console.log(movieList.map((movie)=> console.log(movie.release_date.slice(0,4))))
    let newList = movieList.filter((movie)=> movie.vote_average >= rating)
      setMovieList(newList)
  }

  return (
    <div className="">
      <div className="header_title">
      <Link to="/" style={{textDecoration:"none", color:"#8d99ae"}} onClick={()=>setPageNumber(1)}>
        <h1 >Popular Movies</h1>
        </Link>
        <p style={{marginTop:"10px", color:"#edf2f4", fontSize:"20px"}}>Page : {pageNumber}</p>
        </div>
        <div style={{display: "flex", gap:"2rem", marginLeft:"85px" , marginBottom:"30px",}}>
        <div className="btn-container">
          <button onClick={() => pageNumber >1 ? 
          setPageNumber(pageNumber - 1)
          : null
          }>
            PrevPage
          </button>
          <button onClick={() => setPageNumber(pageNumber + 1)}>
            NextPage
          </button>
        </div>

        <form onSubmit={(e) => handelSearch(e)}>
          <input
            type={"text"}
            placeholder={"Search by Name"}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button>Search</button>
        </form>
        <form onSubmit={(e) => handelFilter(e)}>
          <input
            type={"text"}
            placeholder={"Filter By Minimum Rating"}
            onChange={(e) => setRating(e.target.value)}
          ></input>
          <button>Search</button>
        </form>
        </div>
        
      
      <div className="movie_list">
        <div className="list__cards">
          {movieList.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
