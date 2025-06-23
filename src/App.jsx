import React, { lazy, Suspense } from 'react';
import "./app.css";
import { Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const MovieDetails = lazy(() => import('./components/MovieDetails'));

const App = () => {
  return (
    <Suspense fallback={
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <svg className="animate-spin h-10 w-10 text-lime-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
        </svg>
        <p className="text-lime-400 text-sm">Loading MovieVerse...</p>
      </div>
    }>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/movie/:imdbID' element={<MovieDetails />} />
      </Routes>
    </Suspense>
  )
}

export default App;
