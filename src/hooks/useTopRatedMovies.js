import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {  addTopRatedMovies } from '../store/MoviesSlice'

export const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => { 
        const getTopRatedMovies = async () => {
          const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?&page=1', API_OPTIONS)
          const json = await response.json()
          //console.log(json.results)
          dispatch(addTopRatedMovies(json.results))
        }
        getTopRatedMovies();
      }, [dispatch])
}
