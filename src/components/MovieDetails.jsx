import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import movieApi from '../api/movieApi';
import { API_KEY } from '../api/config';

const MovieDetails = () => {
    const { imdbID } = useParams();
    const [movieDetail, setMovieDetail] = useState(null);
    const [loading, setLaoding] = useState(false);


    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                setLaoding(true);
                const res = await movieApi.get(`?apikey=${API_KEY}&i=${imdbID}`);
                setMovieDetail(res.data);
            } catch (error) {
                console.log(error);

            } finally {
                setLaoding(false);
            }

        };
        fetchMovieDetails();
    }, [imdbID]);

    if (!movieDetail) return <h1>Loading...</h1>;
    if (loading) return <h1 className='tetx2xl text-green-500 text-center'>Loading</h1>

    return (
        <div className="p-4 max-w-6xl mx-auto text-white">
            <div className="flex flex-col md:flex-row gap-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-2xl border border-gray-700">

                {/* Left - Movie Poster */}
                <div className="md:w-1/3 w-full flex justify-center items-center">
                    <img
                        src={movieDetail.Poster !== "N/A" ? movieDetail.Poster : "/no-image.jpg"}
                        alt={movieDetail.Title}
                        className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    />
                </div>

                {/* Right - Movie Details */}
                <div className="md:w-2/3 w-full space-y-4">
                    <h1 className="text-4xl font-extrabold text-lime-400 tracking-wide drop-shadow-lg">{movieDetail.Title}</h1>

                    <p className="text-gray-300"><span className="font-bold text-lime-300">Year:</span> {movieDetail.Year}</p>
                    <p className="text-gray-300"><span className="font-bold text-lime-300">Genre:</span> {movieDetail.Genre}</p>
                    <p className="text-gray-300"><span className="font-bold text-lime-300">Director:</span> {movieDetail.Director}</p>
                    <p className="text-gray-300"><span className="font-bold text-lime-300">Actors:</span> {movieDetail.Actors}</p>
                    <p className="text-gray-400 text-sm leading-relaxed"><span className="font-bold text-lime-300">Plot:</span> {movieDetail.Plot}</p>

                    <div className="flex gap-4 mt-6">
                        <button className="px-4 py-2 bg-lime-500 hover:bg-lime-600 text-black font-bold rounded shadow-md transition">
                            Watch Trailer
                        </button>
                        <button className="px-4 py-2 bg-transparent border border-lime-400 hover:bg-lime-600 text-lime-400 hover:text-black rounded font-semibold transition">
                            Add to Watchlist
                        </button>
                    </div>
                </div>
            </div>
        </div>

        // <div className="relative p-4 max-w-6xl mx-auto text-white min-h-screen flex items-center justify-center">

        //     {/* Background Blur Poster */}
        //     <div
        //         className="absolute inset-0 bg-cover bg-center filter blur-sm brightness-50"
        //         style={{
        //             backgroundImage: `url(${movieDetail.Poster !== "N/A" ? movieDetail.Poster : "/no-image.jpg"})`
        //         }}
        //     ></div>

        //     {/* Glassmorphism Card */}
        //     <div className="relative z-10 flex flex-col md:flex-row gap-10 bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-gray-500 max-w-5xl mx-auto">

        //         {/* Movie Poster with Tilt and Glow */}
        //         <div className="md:w-1/3 w-full flex justify-center items-center transform hover:scale-105 transition duration-500">
        //             <img
        //                 src={movieDetail.Poster !== "N/A" ? movieDetail.Poster : "/no-image.jpg"}
        //                 alt={movieDetail.Title}
        //                 className="w-full h-auto rounded-xl shadow-xl ring-4 ring-lime-400 hover:ring-lime-300 transition duration-300 ease-in-out"
        //             />
        //         </div>

        //         {/* Movie Info */}
        //         <div className="md:w-2/3 w-full space-y-4 text-gray-200">
        //             <h1 className="text-4xl font-extrabold text-lime-400 drop-shadow-lg">{movieDetail.Title}</h1>

        //             {/* Fancy Badges */}
        //             <div className="flex flex-wrap gap-3">
        //                 <span className="px-3 py-1 bg-lime-500 text-black font-bold rounded-full shadow-md">⭐ {movieDetail.imdbRating} IMDB</span>
        //                 <span className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 font-semibold rounded-full shadow-md">{movieDetail.Rated}</span>
        //                 <span className="px-3 py-1 border border-lime-400 rounded-full">{movieDetail.Runtime}</span>
        //             </div>

        //             <p><span className="font-bold text-lime-300">Year:</span> {movieDetail.Year}</p>
        //             <p><span className="font-bold text-lime-300">Genre:</span> {movieDetail.Genre}</p>
        //             <p><span className="font-bold text-lime-300">Director:</span> {movieDetail.Director}</p>
        //             <p><span className="font-bold text-lime-300">Actors:</span> {movieDetail.Actors}</p>
        //             <p className="text-sm leading-relaxed text-gray-300"><span className="font-bold text-lime-300">Plot:</span> {movieDetail.Plot}</p>

        //             {/* Neon Buttons */}
        //             <div className="flex gap-4 mt-6">
        //                 <button className="px-5 py-2 bg-lime-500 hover:bg-lime-600 text-black font-bold rounded-full shadow-lg transition hover:scale-105">
        //                     Watch Trailer
        //                 </button>
        //                 <button className="px-5 py-2 bg-transparent border border-lime-400 text-lime-400 hover:bg-lime-600 hover:text-black rounded-full font-semibold shadow-md transition hover:scale-105">
        //                     Add to Watchlist
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>

    );
};

export default MovieDetails;
