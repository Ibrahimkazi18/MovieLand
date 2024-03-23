import React, { useState, useEffect } from "react";
import MovieComponent from "./MovieComponent";
import "./App.css";

const API_URL = " http://www.omdbapi.com/?i=tt3896198&apikey=79aca652";


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1> Movielove</h1>
      <h1>Changes by u1</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        
          <span class="material-symbols-outlined" onClick={() => searchMovies(searchTerm)}>
          Search
          </span>
        
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieComponent movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
