function Movie({ movie, onSelectMovie }) {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="flex justify-start mx-auto w-full p-2 gap-4 hover:bg-gray-900 hover:cursor-pointer hover:rounded-sm sm:w-auto"
    >
      <img src={movie.Poster} alt="" className="h-24 w-24 rounded-sm" />
      <div className="gap-6 flex flex-col font-bold">
        <p>{movie.Title}</p>
        <p className="italic font-light text-green-400 opacity-50">{movie.Year}</p>
      </div>
    </li>
  );
}

export default Movie;
