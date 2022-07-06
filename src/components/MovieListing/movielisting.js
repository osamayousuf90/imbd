import React from "react";
import { useSelector } from "react-redux";
import { addMovies, fetchAsyncMovies, getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/moviecard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  // console.log(addMovies);
  

  return (
    <>
      {movies.Response === "True" ?
        (<>
          {movies.Search.map(( movie , index) => {
            return (
              <>
                <MovieCard key={index} movie={movie} />
              </>
            )
          })}
        </>) :
        (<>
          <h3>Not Working</h3>
        </>)}
    </>   
    )
};

export default MovieListing;
