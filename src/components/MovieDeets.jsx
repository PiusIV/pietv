import { useEffect, useState } from "react";
import Loader from "./Loader";

const API_KEY = "ca2e5ed9";

function MovieDeets({ selectedId }) {
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
      console.log(data);
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
    <div className="w-auto h-screen p-0 flex flex-col">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="w-full h-[20rem] grid grid-cols-2 px-2">
            <button className="text-lg border-1 rounded-full z-20 bg-grey-600 h-9 items-center w-9">
              &larr;
            </button>
            <div className="w-full h-6 mx-auto">
              <img src={poster} alt={`movie ${poster}`} />
            </div>
          </header>
          <div className="px-3 grid gap-3 mb-4">
            <h2 className="uppercase font-bold">{title}</h2>
            <p>
              {released} &bull; {runtime}
            </p>
            <p>{genre}</p>
            <p>
              <span>star</span>
              {imdbRating} IMDB Rating
            </p>
          </div>
          <section className="px-3 grid gap-6">
            <p className="font-serif">
              <em>{plot}</em>
              <p className="font-mono">Starring: {actors}</p>
              <p>
                Directed by: <strong>{director}</strong>
              </p>
            </p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDeets;
