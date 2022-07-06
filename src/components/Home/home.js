import React from "react";
import MovieListing from "../MovieListing/movielisting";
import { useEffect } from "react";
import { addMovies, fetchAsyncMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import movieApi from "../apis/movieApi";
import APIKey from "../apis/movieApiKey";


const Home = ({ changer, style, white }) => {
  
  const dispatch = useDispatch();
  const movieName = "Deadpool";


  useEffect(() => {
    const fetchMovies = async () => {
      await movieApi
      .get(
        `http://www.omdbapi.com/?s=${movieName}&apikey=${APIKey}&type=movie`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addMovies(res.data))
        return res.data;
  
      })
    }
    
    fetchMovies();
  }, []); 


  

  return (
    <>
      <div style={style} className="home container-fluid">
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
