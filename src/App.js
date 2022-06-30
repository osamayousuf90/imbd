import './App.scss';
import { BrowserRouter, Routes , Route } from "react-router-dom"

import Home from './components/Home/home';
import MovieDetail from './components/MovieDetail/moviedetail';
import PageNotFound from './components/PageNotFound/PageNotFind';
import Header from './components/Header/header';


function App() {
  return (
    <>
      <BrowserRouter>
         <Header/>
        <Routes>
          <Route path="/" element={<Home />} ></Route> 
          <Route path="/movie/:imdbID" element={<MovieDetail />}></Route>
          <Route path='*' element={<PageNotFound/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
