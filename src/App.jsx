import { useState } from 'react'
import MoviesData from './Data/MoviesData'
import Movie_List from './Components/Movie_List';

function App() {

  return (
    <>
    <header className='w-full bg-blue-500 p-2 flex justify-center gap-6 items-center mb-6'>
      <div>
          <h1 className='text-center mt-4 mb-2'>
              My Movie List
          </h1>

          <input placeholder='Search movies here'
          className='w-[650px] p-2 mb-4 rounded-xl bg-white' />
      </div>


    </header>
  
  <Movie_List  movies={MoviesData}/>

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
