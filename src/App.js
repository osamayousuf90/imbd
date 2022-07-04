import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Home from "./components/Home/home";
import MovieDetail from "./components/MovieDetail/moviedetail";
import PageNotFound from "./components/PageNotFound/PageNotFind";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";

function App() {

  const [white, setWhite] = useState(false)

  // useEffect(() => {
  //   localStorage.setItem("black");
  // }, [])

  const isBlack = localStorage.getItem("black");
    
  
  const style = {
    backgroundColor: isBlack ? "black" : "white",
    color: isBlack ? "white" : "black"
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
              <Route path="/" element={<Home style={style} changer={changer} white={white} />}></Route>
              <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
