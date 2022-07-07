import React from 'react'
import movieApi from '../apis/movieApi';
import { addMovies } from '../../features/movies/movieSlice';
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import APIKey from '../apis/movieApiKey';

const SearchMovie = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate()
   
    const test = async () => {
    
        await movieApi
        .get(
          `http://www.omdbapi.com/?s=${search}&apikey=${APIKey}&type=${category}`
        )
        .then((res) => {
          console.log(res.data);
          dispatch(addMovies(res.data))
                 navigate("/searchMovie")
    
          return res.data;
    
        })
      }
     
    
  return (
    <div>SearchMovie</div>
  )
}

export default SearchMovie