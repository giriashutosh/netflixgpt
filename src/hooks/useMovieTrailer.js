import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addMovieTrailer } from '../store/MoviesSlice'

export const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getMoviesVideos = async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos", API_OPTIONS)
            const json = await response.json()
            const trailerVideo = json.results.filter(trailer => trailer.type === "Trailer")
            const trailer = trailerVideo.length ? trailerVideo[0] : json.results[0];
            //console.log(trailer)
            dispatch(addMovieTrailer(trailer))
        }
        getMoviesVideos();
    }, [dispatch, movieId])
}
