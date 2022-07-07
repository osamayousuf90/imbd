import React from 'react';
import { useParams } from "react-router-dom";

const MovieDetail = ({ style, movie }) => {

  console.log(movie);
  
  const { imdbID } = useParams();

  return (
    <>
      <div style={style} className="container_info">
        <h2>{imdbID}</h2>
        {/* <p>{}</p> */}

      
      </div>
    </>
  )
}

export default MovieDetail