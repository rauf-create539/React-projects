import React, { useState } from 'react';
import MoviesData from '../Data/MoviesData';


const Movie_List = ({ movies }) => {

    const [currentPage, setCurrentPage] =useState(1);
    const perPage = 8;

    const startIndex = (currentPage -1) * perPage;
    const lastIndex = startIndex + perPage;
    const currentMovies = movies.slice(startIndex, lastIndex);

    const totalPages = Math.ceil(movies.length / perPage);

    const handleNext = () => {
        if(currentPage < totalPages) setCurrentPage(currentPage +1);
    };

    const handlePrev = () => {
        if(currentPage > 1) setCurrentPage(currentPage -1);
    };

  return (
    <div className='w-full flex flex-col justify-center items-center '>
        <ul className='w-[1300px] grid grid-cols-4 gap-6'>
            {currentMovies.map((movie, i) => (
                <li key={movie.id || i}>
                    <div className='bg-gray-400 p-2 flex flex-col items-center'>
                    <h1>
                     {movie.title}
                    </h1>
                    <img src={movie.image}
                    className='w-[250px] h-[250px]' />
                    </div>
                </li>
            ))}
        </ul>


        <div className='mt-4 flex gap-4 items-center'>
            <button onClick={handlePrev}
            disabled={currentPage ===1}
            className = {`px-4 py-2 rounded ${currentPage ===1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            > 
                Previous
            </button>

            <span className='font-medium'>
                Page {currentPage} of {totalPages}
            </span>

            <button onClick={handleNext}
className = {`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
               > Next
            </button>
        </div>
    </div>
  )
}

export default Movie_List