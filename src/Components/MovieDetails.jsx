import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesData from '../Data/MoviesData';



const MovieDetails = () => {

    const { id } = useParams();
    const movie = MoviesData.find(m => m.id === parseInt(id));

    if(!movie) return <h1>Movie Not Found.</h1>

  return (
    <div>
        <img src={movie.image} alt={movie.title} />
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails