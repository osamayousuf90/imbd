import React from "react";
import MovieListing from "../MovieListing/movielisting";
import { useEffect } from "react";
import { addMovies, fetchAsyncMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import movieApi from "../apis/movieApi";
import APIKey from "../apis/movieApiKey";


const Home = ({ style }) => {
  

  

  return (
    <>
     
      <div style={style} className="home container-fluid">
        
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
