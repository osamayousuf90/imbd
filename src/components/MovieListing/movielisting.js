import React from 'react'
import { useSelector } from "react-redux"
import { getAllMovies } from '../../features/movies/movieSlice'

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  console.log(movies);
  return (
    <div>movielisting</div>
  )
}

export default MovieListing