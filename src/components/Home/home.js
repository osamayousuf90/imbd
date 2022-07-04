import React from 'react'
import MovieListing from '../MovieListing/movielisting'
import movieApi from '../apis/movieApi'
import APIKey from '../apis/movieApiKey'
import { useEffect } from 'react'

const Home = ({ changer, style, white }) => {
 
  useEffect(() => {
      const moviesText = "Harry"
 
  
  const fetchmovies = async () => {
      await movieApi.get(`?apiKey=${APIKey}&s=${moviesText}&type=movie`).then((res) => console.log(res)).catch((err) => console.log(err))
     } 
    
    }, [])
  
  return (
        <>
      <div style={style} className="home">
         <MovieListing/>
        </div>
        </>
  )
}

export default Home