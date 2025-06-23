
import { configureStore } from "@reduxjs/toolkit"
import movieSlice from "../features/movies/movieSlice"

const RootReducer = {
    movie: movieSlice
}

const store = configureStore({
    reducer: RootReducer,
})

export default store;