import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const movie = useSelector((movie) => movie.movie.movie);

  if (!movie || movie.length === 0) {
    return (
      <div className="text-center text-lime-400 w-full py-10 text-xl">
        🎬 Movie Not Found. Try searching for something else!
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 mx-auto">
      {movie.map((movie, index) => (
        <MovieCard index={index} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
