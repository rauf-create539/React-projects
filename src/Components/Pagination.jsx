import React from 'react';
import { useState } from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrev }) => {

  return (
    <div>
            <div className='mt-4 flex gap-4 items-center'>
            <button onClick={onPrev}
            disabled={currentPage ===1}
            className = {`px-4 py-2 rounded ${currentPage ===1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
            > 
                Previous
            </button>

            <span className='font-medium'>
                Page {currentPage} of {totalPages}
            </span>

            <button onClick={onNext}
            className = {`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
               > Next
            </button>
        </div>
    </div>
  )
}

export default Pagination