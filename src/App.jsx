import { useState } from 'react'
import MoviesData from './Data/MoviesData'
import Movie_List from './Components/Movie_List';

function App() {

  return (
    <>
    <header className='w-full flex justify-center'>
      <div>
          <h1 className='text-center mt-4 mb-2'>
              My Movie List
          </h1>

          <input placeholder='Search movies here'
          className='w-[650px] p-2 border mb-3 rounded-xl' />
      </div>


    </header>
  
  <Movie_List  movies={MoviesData}/>
    </>
  );
}

export default App
