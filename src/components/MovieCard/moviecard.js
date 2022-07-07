import React, { useState } from "react";
import "../MovieCard/moviecard.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, style  }) => {
   

     
  return (
    <Link to={`/movie/${movie.imdbID}`}  >
    <div style={style} className="cart_item">
        <img src={movie.Poster} className="img_card" alt={movie.Title} />
        <div className="text">
          <p className="text-center">{movie.Title}</p>
          <p>Year : {movie.Year}</p>
          <p >Category : {movie.Type}</p>
        </div>
      </div>
       </Link>
      
  );
};

export default MovieCard;
