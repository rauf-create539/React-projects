import React, { useState } from 'react';
import MoviesData from '../Data/MoviesData';
import Movie_Card from './Movie_Card';
import Pagination from './Pagination';
import Add_Movies from './Utils/Add_Movies';


const Movie_List = () => {

    const [movies, setMovies] = useState(MoviesData);

    const [currentPage, setCurrentPage] =useState(1);
    const perPage = 16;

    const startIndex = (currentPage -1) * perPage;
    const lastIndex = startIndex + perPage;
    const currentMovies = movies.slice(startIndex, lastIndex);

  return (
    <div className='w-full flex flex-col justify-center items-center '>
        <p className='w-[1300px] text-center mb-4 text-gray-600'>myflixer, watch online movies, movies streaming free, free movies, free full hd movies, watch series online, watch full movies free, download movies hd, series online free, series online hd, watch series online free.</p>
        <div className='mb-4'>
         <Add_Movies movies={movies} setMovies={setMovies} />
        </div>
        <Movie_Card currentMovies={currentMovies}/>
        <Pagination currentPage={currentPage}
        totalPages={Math.ceil(MoviesData.length / perPage)}
        onNext={() => setCurrentPage(currentPage + 1)}
        onPrev={() => setCurrentPage(currentPage - 1)}
      />
    </div>
  );
}

export default Movie_List