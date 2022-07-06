import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";

const fetchAsyncMovies = createAsyncThunk("movie/")


const initialState = {
    movies: {}
}

const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;  
        },
    },
    
})


export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;