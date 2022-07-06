import React from "react";
import "../MovieCard/moviecard.scss";

const MovieCard = ({ movie, style }) => {
  return (
    <div style={style} className="cart_item">
      <img src={movie.Poster} className="img_card" alt={movie.Title} />
      <div style={style} className="text">
        <p className="text-center">{movie.Title}</p>
        <p>Year : {movie.Year}</p>
        <p>Category : {movie.Type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
