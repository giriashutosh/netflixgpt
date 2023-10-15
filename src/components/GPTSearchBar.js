import React from 'react';

const GPTSearchBar = () => {
  return (
    <div className='bg-black absolute flex justify-center items-center w-1/2 h-20 mt-40 p-2 ml-96'>
      <form className='w-full flex gap-2 h-10'>
        <input type="text" className="w-full rounded-lg p-2" placeholder="Search any type of movies here..." />
        <button className='bg-red-900 p-2 rounded-lg'>Search</button>
      </form>
    </div>
  );
}

export default GPTSearchBar;
