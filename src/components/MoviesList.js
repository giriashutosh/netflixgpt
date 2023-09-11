import React from 'react'
import MovieCard from './MovieCard'


const MoviesList = ({ title, movies }) => {
    //const movies = useSelector(store => store.movies.nowPlayingMovies)
    if (!movies) return null;
    return (
        <div className='p-4'>
            <h1 className='text-white font-bold text-3xl py-2 px-2'>{title}</h1>
            <div className='mr-2 flex overflow-x-scroll'>
                
                <div className='flex  gap-2 '>
                    {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
                </div>
            </div>

        </div>

    )
}

export default MoviesList
