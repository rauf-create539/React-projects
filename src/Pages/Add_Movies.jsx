import React from 'react'
import AddConfirm from '../Components/Utils/AddConfirm';

const Add_Movies = () => {

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


;

    

  return (
    <div className='h-[78vh] flex justify-center items-center'>

        <div className='flex flex-col items-center bg-blue-100 p-6 mt-10'>

          <h1 className='mb-5 text-2xl font-semibold'>Add Movie</h1>

        <input type='text' placeholder='Enter Movie Title' className='w-[550px] bg-white border p-2 mb-5'/>

        <div>
          <h3 className='mb-3 font-semibold'>Realease date: </h3>
          <input type='date' className='border bg-white p-2 w-[550px] mb-5' />
        </div>

        <div className='mb-5'>
            <h3 className='font-semibold'>Enter the genres: </h3>
        </div>
    
        <div className='grid grid-cols-4 gap-4'>
        {genres.map((genre, i)=> (
            <label key={i} >
               <input type='checkbox' value={genre} />
               {genre}
            </label>
        ))}
        </div>
    
        <AddConfirm />

        </div>
        <div>

        </div>
    </div>
  )
}

export default Add_Movies