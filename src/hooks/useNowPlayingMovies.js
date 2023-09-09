import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../store/MoviesSlice'

export const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => { 
      const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS)
        const json = await response.json()
        console.log(json.results)
        dispatch(addNowPlayingMovies(json.results))
      }
      getNowPlayingMovies();
    }, [dispatch])
}
