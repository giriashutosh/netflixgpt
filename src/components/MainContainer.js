import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if (!movies) return null;

    const mainMovie = movies[4];
    const { title, overview, id } = mainMovie;
  return (
    <div className=''>
          <VideoTitle title={title} overview={ overview} />
          <VideoBackground movieId={ id} />
    </div>
  )
}

export default MainContainer
