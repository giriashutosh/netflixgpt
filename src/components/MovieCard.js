import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constant'

const MovieCard = ({ movie }) => {
    console.log(movie)
  return (
    <div className='w-48 m-2'>
          <img className="rounded-lg " src={IMAGE_CDN_URL + movie.poster_path} alt='' />
          {/* <div className='ml-2'>
              <p className='font-bold hover:text-red-700'>{movie.title}</p>
              <p>{ movie.release_date}</p>
          </div> */}
    </div>
  )
}

export default MovieCard
