import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink} from 'react-router-dom';
import MoviesData from './Data/MoviesData'
import Movie_List from './Components/Movie_List';
import Movie_Card from './Components/Movie_Card';
import MovieDetails from './Components/MovieDetails';
import { About } from './Pages/About';
import Favorites from './Pages/Favorites';
import Add_Movies from './Pages/Add_Movies';
Movie_Card

function App() {

  const [movies, setMovies] = useState([]);

  const addMovies = (newMovies) => {
    setMovies([...movies, newMovies]);
  };

  return (
    <>
    <header className='w-full bg-blue-500 flex gap-3.5 p-6'>

      <nav className='flex gap-5 ml-23'>
      <NavLink to="/" end className={({isActive}) => (isActive ? 'text-blue-600 font-bold' : 'text-black font-normal')}>
      Home
      </NavLink>
      <NavLink to="/about" className={({isActive}) => (isActive ? 'text-blue-600 font-bold' : 'text-black font-normal')}>
      About
      </NavLink>
      <NavLink to="/favorites" className={({isActive}) => (isActive ? 'text-blue-600 font-bold' : 'text-black font-normal')}>
        Favorites 
      </NavLink>
    </nav>

    </header>

      <Routes>
        <Route path="/" element={<Movie_List movies={[...MoviesData, ...(JSON.parse(localStorage.getItem("movies")) || [])]} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites /> } />
        <Route path="/add_movies" element={<Add_Movies />} />
        <Route path='/movie/:id' element={<MovieDetails />} />
      </Routes>

  <footer className='flex justify-around mt-10 bg-black p-6 text-white items-center'>
    <div>
        <h1>Movie-App</h1>
    </div>

    <div>
      <p className='w-[700px] text-gray-300 text-sm'>Free Movies streaming site with zero ads. We let you watch movies online without having to register or paying, with over 10000 movies and TV-Series. You can also Download full movies from MyFlixer and watch it later if you want.</p>
      <ul className='flex gap-5 mt-2 font-semibold'>
        <li>Terms of Service</li>
        <li>Contact</li>
        <li>Sitemap</li>
      </ul>
    </div>

    <div>
      <p className='w-[400px] font-light border border-gray-300 p-3 text-xs'>
         Movie-app does not store any files on our server, we only linked to the media which is hosted on 3rd party services.
      </p>
    </div>
  </footer>
    </>
  );
}

export default App
