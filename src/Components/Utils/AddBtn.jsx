import React from 'react';
import { useNavigate } from 'react-router-dom';

const AddBtn = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add_movies');
    };

  return (
    <div>
        <button onClick={handleClick} className='p-2 w-[200px] bg-blue-700 text-white'>
            Add Movie
        </button>
    </div>
  )
}

export default AddBtn