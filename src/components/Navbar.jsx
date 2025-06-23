import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from '../features/movies/movieSlice'; // fixed spelling

const Navbar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(setSearchTerm(query)); // debounced dispatch
        }, 500);

        return () => clearTimeout(timer); // cleanup
    }, [query, dispatch]);

    return (
        <nav className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-lime-400 text-2xl font-bold tracking-wider">
                    🎬 MovieVerse
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-8 text-gray-300 font-medium">
                    <Link to="/" className="hover:text-lime-400 transition">Home</Link>
                    <Link to="/watchlist" className="hover:text-lime-400 transition">Watchlist</Link>
                    <Link to="/about" className="hover:text-lime-400 transition">About</Link>
                </div>

                {/* Search Input */}
                <div className="hidden md:flex items-center bg-gray-800 px-3 py-1 rounded-full">
                    <input
                        type="text"
                        placeholder="Search movies..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="bg-transparent outline-none text-sm text-white placeholder-gray-400 w-32"
                    />
                    {query ? <button onClick={() => setQuery("")}>{"x"}</button> : ""}

                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden cursor-pointer">
                    <svg className="w-6 h-6 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
