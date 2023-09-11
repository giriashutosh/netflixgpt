import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch } from 'react-redux'
import {  addUpComingMovies } from '../store/MoviesSlice'

export const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    useEffect(() => { 
        const getUpcomingMovies = async () => {
          const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?&page=1', API_OPTIONS)
          const json = await response.json()
          //console.log(json.results)
          dispatch(addUpComingMovies(json.results))
        }
        getUpcomingMovies();
      }, [dispatch])
}
