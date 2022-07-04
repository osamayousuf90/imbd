import React from 'react';
import MovieListing from '../MovieListing/movielisting';
import movieApi from '../apis/movieApi';
import APIKey from '../apis/movieApiKey';
import { useEffect } from 'react';
import axios from "axios";

const Home = ({ changer, style, white }) => {
 
  useEffect(() => {
    fetchmovies()
  }, [])
  

 
  
  const fetchmovies =  async () => {
     await movieApi.get("http://www.omdbapi.com/?s=Harry&apikey=c369b124&type=movie").then((res) => console.log(res)).catch((err) => console.log(err))
     } 
    
  
  return (
        <>
      <div style={style} className="home">
         <MovieListing/>
        </div>
        </>
  )
}

export default Home