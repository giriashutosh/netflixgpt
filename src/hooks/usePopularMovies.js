import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../store/MoviesSlice'

export const usePopularMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => { 
        const getPopularMovies = async () => {
          const response = await fetch('https://api.themoviedb.org/3/movie/popular&page=1', API_OPTIONS)
          const json = await response.json()
          //console.log(json.results)
          dispatch(addPopularMovies(json.results))
        }
        getPopularMovies();
      }, [dispatch])
}
