import React from 'react';
import MovieListing from '../MovieListing/movielisting';
import movieApi from '../apis/movieApi';
import APIKey from '../apis/movieApiKey';
import { useEffect } from 'react';
import { useDispatch } from "react-redux"
import { addMovies } from '../../features/movies/movieSlice';

const Home = ({ changer, style, white }) => {
 
  const movieName = "Harry"
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchmovies =  async () => {
     await movieApi
        .get(`http://www.omdbapi.com/?s=${movieName}&apikey=${APIKey}&type=movie`).then((res) => { dispatch(addMovies(res.data)) }).catch((err) => console.log(err));
         
    } 
    fetchmovies();
  }, [])
  

  
  
    
  
  return (
        <>
      <div style={style} className="home container-fluid">
         <MovieListing/>
        </div>
        </>
  )
}

export default Home