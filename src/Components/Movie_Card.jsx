import React from 'react'

const Movie_Card = ({ currentMovies }) => {

  return (
    <div>

        <ul className='w-[1300px] grid grid-cols-8 gap-3'>
            {currentMovies.map((movie, i) => (
                <li key={movie.id || i}>
                    <div className='flex flex-col items-center'>
                    <img src={movie.image}
                    className='w-[200px] h-[250px] rounded-2xl hover:opacity-0 transition-opacity duration-300 grain' />
                    <h1>
                     {movie.title}
                    </h1>
                    </div>
                </li>
            ))}
        </ul>

    </div>
  )
}

export default Movie_Card