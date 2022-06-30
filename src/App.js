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

  useEffect(() => {
  localStorage.setItem("black" , "setBlack")
   
  }, [])

  const isBlack = localStorage.getItem("black");
    
  
  const style = {
    backgroundColor: isBlack ? "black" : "white",
    color: isBlack ? "white" : "black"
  }

 

   
  const changer = () => {
    if (isBlack === "setBlack") {
       setWhite(false)
    } else if (isBlack === "setBlack") {
      localStorage.removeItem("black")
      setWhite(true)
     }
  }



  return (
    <>
      <BrowserRouter>
        <Header style={style} changer={changer} white={white} />  
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
