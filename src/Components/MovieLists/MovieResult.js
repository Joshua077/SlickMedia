import React from 'react'
import './MovieList.css'
export default function MovieResult({errorMessage, movies}) {
    

    return (
        <div className="movieContainer">
          <span>Movie Category Name</span>  

          {errorMessage && <p className='error'>{errorMessage}</p>}

          <div className="movieWrapper">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => {
              return (
                <div className="imgSection">
                  <img src={movie.Poster} alt="Movies" />
                </div>
              );
            })}
        </div>


        </div>
    )
}
