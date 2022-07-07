import React from 'react'
import movieApi from '../apis/movieApi';
import { addMovies } from '../../features/movies/movieSlice';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import APIKey from '../apis/movieApiKey';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';
import MovieCard from '../MovieCard/moviecard';

const SearchMovie = (style) => {

  //   const dispatch = useDispatch();
  // const navigate = useNavigate();

  const movies = useSelector(getAllMovies);
   
    
  return (
    <>
    {movies.Response === "True" ?
      (<>
        {movies.Search.map(( movie , index) => {
          return (
            <>
              <MovieCard style={style} key={index} movie={movie} />
            </>
          )
        })}
      </>) :
      (<>
        <h3>Not Working</h3>
      </>)}
  </>   
  )
}

export default SearchMovie