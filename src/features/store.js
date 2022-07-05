import { configure } from "@testing-library/react";
import movieReducer from "./movies/movieSlice"

export const store = configure({
    reducer: movieReducer,
});