import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        upComingMovies: null,
        topRatedMovies: null,
        popularMovies:null,
        movieTrailer:null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addMovieTrailer, addPopularMovies, addTopRatedMovies, addUpComingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;