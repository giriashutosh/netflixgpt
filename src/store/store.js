import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import moviesReducer from './MoviesSlice'
import gptsearchReducer from "./GptSearchSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        gptsearch: gptsearchReducer
    }
})

export default appStore