import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieList.css";
import MovieResult from "./MovieResult";
export default function MovieLists(props) {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const changeTheSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const getAllMovies = () => {
    const APIURL = "https://www.omdbapi.com/?s=avenger&apikey=fa6af407";
    axios
      .get(APIURL)
      .then((response) => {
        console.log(response.data.Search, "Result here");
        setMovies(response.data.Search);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const getSearchedMovies = (searchValue) => {
    const APIURL = `https://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
       // console.log(SEARCHAPI + search)
       axios
       .get(APIURL)
       .then((response) => {
         //  console.log(response.data.Response, "Result search here");
         // setMovies(response.data.Search);
         if(response.data.Response === "True"){
             setMovies(response.data.Search);
             console.log(response.data.Response, "Result search here good")
             setErrorMessage(" ")
             setLoading(false)
         }else{
             setErrorMessage(response.data.Error)
             setMovies([])
             console.log(response.data.Error, "You are here")
             setLoading(false)
         }
       })
       .catch((error) => {
         console.log(error);
         setLoading(false)
       });
     }

     useEffect(() => {
        if(searchQuery.length > 2){
         getSearchedMovies(searchQuery)
        }else{
         getAllMovies();
        }
       }, [searchQuery]);
       
  return (
  <div className="movieList">
  <div className="movieSearch">
        <span>Search</span>
        <input type="text" value={searchQuery} onChange={changeTheSearch} />
     
        
      </div>
      {
        loading &&  <div className="loading"> Loading....</div> 
      }
      <MovieResult movies={movies} errorMessage={errorMessage} />
      <MovieResult movies={movies} errorMessage={errorMessage} />
  </div>);
}
