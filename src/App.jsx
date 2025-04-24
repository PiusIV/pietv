import { useEffect, useState } from "react";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MainContent from "./components/MainContent";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import MovieDeets from "./components/MovieDeets";
import Footer from "./components/Footer";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

const API_KEY = "ca2e5ed9";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setError] = useState("");
  const [isSearchFocused, setIsSearchFocuced] = useState(null);
  // const tempQ = "interstellar";

  function handleSelectMovie(id) {
    //better way to conditionally select
    setSelectedId((selectedId) => (id === selectedId ? null : id));
    // setSelectedId(id)
  }

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  useEffect(() => {
    //to clear search requests until its the last, also make it faster
    const controller = new AbortController();

    async function searchMovie() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("An error occurred");

        const data = await res.json();
        if (data.Response === "False") throw new Error("Movie not found");

        setMovies(data.Search);
        // console.log(data.Search);
        setIsLoading(false);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      // setError("");
      return;
    }

    searchMovie();
    //cleanup the mfin function
    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <div className="bg-gray-950 min-h-screen h-full max-w-screen text-white gap-2 overflow-hidden">
      <Navbar>
        <Logo />
        <Search
          query={query}
          setQuery={setQuery}
          shouldFocus={isSearchFocused}
        />
      </Navbar>
      <HeroSection onSearchClicked={() => setIsSearchFocuced(true)} />
      <MainContent>
        <Box>
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDeets
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
            />
          ) : (
            <p>Oopa, No movie searched!</p>
          )}
        </Box>
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;
