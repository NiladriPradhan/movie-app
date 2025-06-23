import { Link } from "react-router-dom";

const MovieCard = ({ index, movie }) => {
  const { imdbID, Title, Poster, Year } = movie;

  return (
    <Link
      to={`/movie/${imdbID}`}
      key={index}
      className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-400/50"
    >
      <div className="relative">
        <img
          src={Poster}
          alt={Title}
          className="w-full h-64 object-cover rounded-t-xl"
        />
        <div className="absolute top-2 right-2 bg-lime-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow-md">
          {Year}
        </div>
      </div>
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-lime-400 truncate">{Title}</h2>
        <p className="text-sm text-gray-300 mt-1">Click for details ➡️</p>
      </div>
    </Link>
  );
};

export default MovieCard;
