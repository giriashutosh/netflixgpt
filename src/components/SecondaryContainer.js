import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector(store => store.movies)
  if(!movie) return null
  return (
    <div className='bg-black'>
      <div className='-mt-52 relative z-20'>
      <MoviesList title="Now Playing" movies={movie.nowPlayingMovies} />
      <MoviesList title="Trending" movies={movie.nowPlayingMovies} />
      <MoviesList title="Popular" movies={movie.popularMovies} />
      <MoviesList title="Recommended" movies={movie.nowPlayingMovies} />
      <MoviesList title="Up Coming" movies={movie.nowPlayingMovies} />
      </div>
    
    </div>
  )
}

export default SecondaryContainer
