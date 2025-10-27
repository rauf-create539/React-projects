import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import MoviesData from './Data/MoviesData'
import Movie_List from './Components/Movie_List';
import Movie_Card from './Components/Movie_Card';
Movie_Card

function App() {

  return (
    <BrowserRouter>
    <>

    <header>
      <div>
        <h1>My Movie List</h1>
      </div>
    </header>

    <nav>
      <NavLink to="/" end className={({isActive}) => (isActive ? 'text-blue-600 font-bold' : 'text-black font-normal')}>
      Home
      </NavLink>
      <NavLink to="/about" className={({isActive}) => (isActive ? 'text-blue-600 font-bold' : 'text-black font-normal')}>
      About
      </NavLink>
    </nav>

    <Routes>
      <Route path="/" element={<Movie_List movies={MoviesData} />} />
      <Route path="/about" element={<Abort />} />
    </Routes>


    </>
    </BrowserRouter>
  );
}

export default App
