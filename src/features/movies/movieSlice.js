// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import movieApi from "../../api/movieApi";
// import { API_KEY } from "../../api/config";


// export const fetchMovie = createAsyncThunk("movie/fetchMovie", async (search) => {
//     try {
//         const res = await movieApi.get(`?apikey=${API_KEY}&s=${search}&type=movie`);
//         return res.data.Search;
//     } catch (error) {
//         console.log(error.message);

//     }
// });

// const initialState = {
//     movie: {
//         data: [],
//         isLoading: false,
//         isError: null
//     }
// };

// const movieSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {
//         setData: (state, action) => {
//             state.movie.data = action.payload;
//         },
//     },
//     // To handle api related task
//     extraReducers: (builder) => {
//         builder.addCase(fetchMovie.pending, (state) => {
//             state.isLoading = true
//         })
//             .addCase(fetchMovie.fulfilled, (state, { payload }) => {
//                 state.isLoading = false;
//                 state.movie = payload
//             })
//             .addCase(fetchMovie.rejected, (state, { payload }) => {
//                 state.isLoading = false;
//                 state.isError = payload;
//             })
//     }

// })

// export const { addMovies } = movieSlice.actions;

// export const getData = (state) => state.movies.movie;

// export default movieSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: [],
  searchTerm: "",
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovie: (state, { payload }) => {
      state.movie = payload;
    },
    setSearchTerm: (state, { payload }) => {
      state.searchTerm = payload;
    }
  }
})


export const { setMovie, setSearchTerm } = movieSlice.actions;
export default movieSlice.reducer;