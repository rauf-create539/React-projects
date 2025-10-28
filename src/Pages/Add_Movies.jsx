import React, { useState } from 'react'
import AddConfirm from '../Components/Utils/AddConfirm';

const Add_Movies = () => {

  const [movie, setMovie] = useState({
    title: '', releaseDate: '', genres: [], image: ''
  });

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western"
];

    

  return (
    <div className='h-[88vh] flex justify-center items-center'>

        <div className='flex flex-col items-center bg-blue-100 p-6 mt-10'>

          <h1 className='mb-5 text-2xl font-semibold'>Add Movie</h1>

        <input type='text' placeholder='Enter Movie Title' 
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        className='w-[550px] bg-white border p-2 mb-5'/>

        <div>
          <h3 className='mb-3 font-semibold'>Realease date: </h3>
          <input type='date' className='border bg-white p-2 w-[550px] mb-5' 
          onChange={(e) => setMovie({ ...movie, releaseDate: e.target.value })}          />
        </div>

        <div className='mb-5'>
          <h3 className='mb-2'>Upload Movie Image: </h3>

          <input 
          className='border w-[550px] bg-white p-2'
          type="file" accept="image/*" onChange={(e) => {
            const file = e.target.files[0];
            if(file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setMovie(prev => ({ ...prev, image: reader.result }));
              };
              reader.readAsDataURL(file);
            }
          } }/>
        </div>

        <div className='mb-5'>
            <h3 className='font-semibold'>Enter the genres: </h3>
        </div>
    
        <div className='grid grid-cols-4 gap-4'>
        {genres.map((genre, i)=> (
            <label key={i}>
               <input type='checkbox' value={genre} 
               onChange={(e) => { const checked = e.target.checked;
                setMovie(prev => ({
                  ...prev, genres: checked ? [ ...prev.genres, genre ] : prev.genres.filter(g=> g !== genre)
                }))
               }}
               />
               {genre}
            </label>
        ))}
        </div>
    
        <AddConfirm movie={movie} />

        </div>
        <div>

        </div>
    </div>
  )
}

export default Add_Movies