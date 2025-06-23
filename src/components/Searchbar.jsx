const Searchbar = ({query,setQuery,searchMovies}) => {

    return (
        <>
            <div className="flex justify-center mb-8 pt-4">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-1/2 p-2 rounded-l-md  outline-none border-white border"
                />
                <button
                    onClick={searchMovies}
                    className="bg-blue-600 px-5 rounded-r-md hover:bg-blue-700"
                >
                    Search
                </button>
            </div>
        </>
    )
}

export default Searchbar;