import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./components/Home/home";
import MovieDetail from "./components/MovieDetail/moviedetail";
import PageNotFound from "./components/PageNotFound/PageNotFind";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import MovieCard from "./components/MovieCard/moviecard";

function App() {

  const [white, setWhite] = useState(false)


  const isBlack = localStorage.getItem("black");
    
  
  const style = {
    backgroundColor: isBlack ? "black" : "white",
    color: isBlack ? "white" : "black",
    border: isBlack ? "1px solid white" : "1px solid black",
    fontWeight: isBlack ? "580" : "600"
  }

  

   
  const changer = () => {
    if (white === false) {
      setWhite(true)
  localStorage.setItem("black" , "setBlack")
    } else if (white === true) {
      setWhite(false);
      localStorage.removeItem("black")

     }
  }



  return (
    <>
      <BrowserRouter>
        <Header style={style} isBlack={isBlack} changer={changer} white={white} />  
            <Routes>
              <Route path="/" element={<Home style={style} isBlack={isBlack} changer={changer} white={white} />}></Route>
              <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
          <Route element={<MovieCard style={style} />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
