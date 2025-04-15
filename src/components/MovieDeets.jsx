import { useEffect, useState } from "react";
import Loader from "./Loader";

const API_KEY = "ca2e5ed9";

function MovieDeets({ selectedId, onCloseMovie }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    Poster: poster,
    Title: title,
    Released: released,
    Runtime: runtime,
    Genre: genre,
    imdbRating,
    Plot: plot,
    Actors: actors,
    Director: director,
  } = movie;

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;

    return function () {
      document.title = "PieTV+";
    };
  }, [title]);

  return (
    <div className="h-screen overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* Header with backdrop image */}
          <header className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
            {/* Backdrop image */}
            <div className="absolute inset-0 bg-black/30 z-10" />
            <img
              src={poster}
              alt={`${title} backdrop`}
              className="w-full h-full object-cover"
            />

            {/* Back button */}
            <button
              onClick={onCloseMovie}
              className="absolute top-4 left-4 z-20 bg-black/70 hover:bg-black/90 text-white rounded-full p-2 transition-all duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </button>
          </header>

          {/* Movie content */}
          <div className="max-w-4xl mx-auto px-4 py-6">
            {/* Movie poster floating above content */}
            <div className="relative -mt-16 mb-6 mx-auto w-32 h-48 border-4 border-gray-800 rounded-lg overflow-hidden shadow-xl">
              <img
                src={poster}
                alt={`${title} poster`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Movie title and basic info */}
            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
              <div className="flex justify-center items-center gap-4 text-gray-300 text-sm mb-3">
                <span>{released}</span>
                <span>•</span>
                <span>{runtime}</span>
                <span>•</span>
                <span>{genre}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span className="font-semibold">{imdbRating} IMDb Rating</span>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-700 my-6" />

            {/* Plot and details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Plot</h2>
                <p className="text-gray-300 leading-relaxed">{plot}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">Cast</h2>
                  <p className="text-gray-300">{actors}</p>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Director</h2>
                  <p className="text-gray-300">{director}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default MovieDeets;
