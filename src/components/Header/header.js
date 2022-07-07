import React, { useState , useEffect } from 'react'
import Logo from "./imgs/logo.png"
import movieApi from '../apis/movieApi';
import { useDispatch } from 'react-redux';
import APIKey from '../apis/movieApiKey';
import { addMovies } from '../../features/movies/movieSlice';
import { useNavigate } from "react-router-dom"

const Header = ({ style, isBlack, changer, white  }) => {
  const [search, setSearch] = useState("");
  const [category , setCategory] = useState("")

  const dispatch = useDispatch();
  const movieName = "Deadpool";


  const navigate = useNavigate()


  useEffect(() => {
    const fetchMovies = async () => {
      await movieApi
      .get(
        `http://www.omdbapi.com/?s=${movieName}&apikey=${APIKey}&type=${category}`
      )
      .then((res) => {
        console.log(res.data);
        dispatch(addMovies(res.data))

        return res.data;
  
      })
    }
    fetchMovies();
  }, [dispatch]); 
    



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
      <>
      <div className="header">
        <div className="logo_container">
          <img src={Logo} className="logo" alt="" />
        </div>
        
        <div className="profile">
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search' className='search_input' />
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <optgroup>
                <option value="" disabled>
                  Category
                </option>
                <option value="Movie">Movie</option>
                <option value="Series">Series</option>
              </optgroup>
            </select>
          <button onClick={test} className='search_btn'><i class="fa-solid fa-magnifying-glass"></i></button>
           
           
        </div>
        <div className="toggler_container">
        <button className='toggler_theme_changer' onClick={changer}>{ isBlack ? <i class="fa-solid fa-sun"></i> : <i class="fa-solid fa-moon"></i> }</button>
        </div>
       </div>
      </>
  )
}

export default Header