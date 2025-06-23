import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMovie } from '../features/movies/movieSlice';
import movieApi from '../api/movieApi';
import MovieList from './MovieList';
import { API_KEY } from '../api/config';

const Home = () => {


  const [loading, setLaoding] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.movie.searchTerm);

  useEffect(() => {

    const debounceData = setTimeout(() => {
      const fetchMovies = async () => {
        const term = searchTerm || "Avengers";
        try {
          setLaoding(true);
          const res = await movieApi.get(`?apikey=${API_KEY}&s=${term}&type=movie`);
          const data = res.data.Search;
          dispatch(setMovie(data || []))
          console.log(data);
        } catch (error) {
          console.log(error);
          dispatch(setMovie([]))
        } finally {
          setLaoding(false);
        }

      }
      fetchMovies();
    }, 500);
    return () => clearTimeout(debounceData);

  }, [searchTerm, dispatch]);

  return (
    <>
      return (
      <>
        <div className="bg-gray-950 flex container mx-auto w-full">
          {loading ? (
            <div className="flex justify-center items-center w-full h-screen">
              <svg className="animate-spin h-10 w-10 text-lime-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
              </svg>
              <p className="ml-2 text-lime-400">Loading movies...</p>
            </div>
          ) : (
            <MovieList />
          )}
        </div>
      </>
      );

    </>

  )
}

export default Home;