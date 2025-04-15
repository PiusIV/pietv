import { useEffect, useRef } from "react";

function Search({ query, setQuery, shouldFocus }) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (shouldFocus) inputRef.current.focus();
  }, [shouldFocus]);

  return (
    <input
      type="search"
      ref={inputRef}
      name="search-bar"
      id="search-bar"
      placeholder="Search here..."
      className="bg-slate-800 rounded-3xl p-2 font-semibold focus:outline-0 w-32 sm:w-auto mx-auto"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
    />
  );

  // console.log(query);
  return (
    <div>
      <input
        type="search"
        name="search-bar"
        id="search-bar"
        placeholder="Search here..."
        className="bg-slate-800 rounded-3xl p-2 font-semibold focus:outline-0 w-32 sm:w-auto mx-auto"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </div>
  );
}

export default Search;
