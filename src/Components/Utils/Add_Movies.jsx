import React from 'react'

const Add_Movies = ({ movies, setMovies }) => {

    const handleAdd = () => {
      const tile = prompt("Enter Movie title: ");
      const releaseDate = prompt("Enter release date: ");
      const description = prompt("Write description: ");
      const image = prompt("Enter image URL (http / https): ");
    
    
    if (!title || !releaseDate || !description || !image) {
      alert("Missing inputs. All fields are required!");
      return;
    } 

    const newMovie = { title, releaseDate, description, image };
    setMovies([...movies, newMovie]);
    };

  return (
    <div>
        <button onClick={handleAdd} className='bg-blue-600 p-2 rounded'>
            + Add Movie
        </button>
    </div>
  );
};

export default Add_Movies