import Movie from "./Movie";

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="w-[34rem] sm:w-[20rem] md:w-[34rem] px-4 h-screen mt-2 overflow-scroll">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}

export default MovieList;
