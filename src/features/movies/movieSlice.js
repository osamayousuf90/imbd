import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIKey from "../../components/apis/movieApiKey"
import movieApi from "../../components/apis/movieApi";
import { useDispatch } from "react-redux";

// export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async () => {
//     const dispatch = useDispatch();
//     const movieName = "Deadpool";
    

//     await movieApi
//     .get(
//       `http://www.omdbapi.com/?s=${movieName}&apikey=${APIKey}&type=movie`
//     )
//     .then((res) => {
//         console.log(res.data);
//         return res.data

//     })
// })


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
    // extraReducers: {
    //     [fetchAsyncMovies.pending]: () => {
    //         console.log("Pending");
    //     },
    //     [fetchAsyncMovies.fulfilled]: (state , {payload}) => {
    //         console.log("Fullfield Succesfully");
    //         return {...state , movies: payload}
    //     },
    //     [fetchAsyncMovies.rejected]: () => {
    //         console.log("Rejected");
    //     },
    // }
    
})


export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;