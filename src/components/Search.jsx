function Search({ query, setQuery }) {
  // console.log(query);
  return (
    <div>
      <input
        type="search"
        name="search-bar"
        id=""
        className="bg-slate-800 rounded-3xl p-2 font-semibold focus:outline-0 w-28 sm:w-auto mx-auto"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}

export default Search;
