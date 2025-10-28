import React from 'react';
import { useParams } from 'react-router-dom';
import MoviesData from '../Data/MoviesData';



const MovieDetails = () => {

    const { id } = useParams();

    const userMovies = JSON.parse(window.localStorage.getItem("movies")) || [];
   const allMovies = [...MoviesData, ...userMovies];   

  const movie = allMovies.find((m)=> m && m.id && m.id.toString() === id);


    if(!movie) return <h1>Movie Not Found.</h1>

  return (
    <div>
        <img src={movie.image} alt={movie.title} />
        <h1>{movie.title}</h1>
        <p>Release Date: {movie.releaseDate}</p>
        <p>Genres: {movie.genres?.join(', ')}</p>
        <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails