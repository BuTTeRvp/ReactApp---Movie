import React, { useEffect, useState } from "react";
import "./Header.css";
import Card from "../card/Card";

export default function Header() {
  const [pageNumber, setPageNumber] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`https://movie-task.vercel.app/api/popular?page=${pageNumber}`)
      .then((res) => res.json())
      .then((data) => setMovieList(data.data.results));
  }, [pageNumber]);
  console.log(movieList);

  function handelSubmit(e){
    e.preventDefault();
    fetch(`https://movie-task.vercel.app/api/search?page=${pageNumber}&query=${search}`)
    .then((res)=>res.json())
    .then((data)=>setMovieList(data.data.results))

  }

  return (
    <div className="">
      <div className="header_title">
        Popular
        <button onClick={() => setPageNumber(pageNumber - 1)}>PrevPage</button>
        <button onClick={() => setPageNumber(pageNumber + 1)}>NextPage</button>
        <form onSubmit={(e)=>handelSubmit(e)}>
          <input
            type={"text"}
            placeholder={"Search by Name"}
            onChange={(e) => setSearch(e.target.value)}
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
