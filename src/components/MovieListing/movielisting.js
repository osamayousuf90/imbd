import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/moviecard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);

  return (
    <>
      {movies.Response === "True" ?
        (<>
          {movies.Search.map((res , movie , index) => {
            return (
              <>
                <MovieCard key={index} data={movie} />
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
