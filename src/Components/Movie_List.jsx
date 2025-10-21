import React, { useState } from 'react';
import MoviesData from '../Data/MoviesData';


const Movie_List = ({ movies }) => {


  return (
    <div className='w-full flex justify-center'>
        <ul className='w-[1200px] grid grid-cols-4'>
            {movies.map((movie, i) => (
                <li key={movie.id || i} className=''>
                    <h1>
                     {movie.title}
                    </h1>
                    <img src={movie.image}
                    className='w-[250px] h-[250px]' />
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Movie_List