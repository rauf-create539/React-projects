import React from 'react';
import { useNavigate } from 'react-router-dom';


const AddConfirm = ({ movie }) => {

  const navigate = useNavigate();

  const handleAdd = () => {
    if(!movie.title || !movie.title.trim() === ''){
      alert("Enter a movie title. ");
      return;
    }

    const newMovie = { ...movie, id: Date.now() };

   const savedMovies = JSON.parse(localStorage.getItem("movies")) || [];
   savedMovies.push(newMovie);
   localStorage.setItem("movies", JSON.stringify(savedMovies));
    navigate('/');

  };

  return (
    <div>
        <button
        onClick={handleAdd}
        className='bg-blue-600 p-2 w-[350px] mt-5 text-white'>
            Add Movie
        </button>
    </div>
  )
}

export default AddConfirm